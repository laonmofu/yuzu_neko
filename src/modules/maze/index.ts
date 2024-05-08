import { bindThis } from '@/decorators.js';
import Module from '@/module.js';
import serifs from '@/serifs.js';
import { genMaze } from './gen-maze.js';
import { renderMaze } from './render-maze.js';
import Message from '@/message.js';

export default class extends Module {
	public readonly name = 'maze';

	@bindThis
	public install() {
		this.post();
		setInterval(this.post, 1000 * 60 * 3);

		return {
			mentionHook: this.mentionHook
		};
	}

	@bindThis
	private async post() {
		const now = new Date();
		if (now.getHours() !== 22) return;
		const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
		const data = this.getData();
		if (data.lastPosted == date) return;
		data.lastPosted = date;
		this.setData(data);

		this.log('Time to maze');
		const file = await this.genMazeFile(date);

		this.log('Posting...');
		this.ai.post({
			text: serifs.maze.post,
			fileIds: [file.id]
		});
	}

	@bindThis
	private async genMazeFile(seed, size?): Promise<any> {
		this.log('Maze generating...');
		const maze = genMaze(seed, size);

		this.log('Maze rendering...');
		const data = renderMaze(seed, maze);

		this.log('Image uploading...');
		const file = await this.ai.upload(data, {
			filename: 'maze.png',
			contentType: 'image/png'
		});

		return file;
	}

	@bindThis
	private async mentionHook(msg: Message) {
		if (msg.includes(['미로'])) {
			let size: string | null = null;
			if (msg.includes(['쉽게', '순한맛'])) size = 'veryEasy';
			if (msg.includes(['간단하게', '간단', '간단히', '간단하다', '간단한'])) size = 'easy';
			if (msg.includes(['어렵게', '매운맛', '맵게', '어렵다', '어려운'])) size = 'hard';
			if (msg.includes(['죽음', '오니', '지옥', '고인물'])) size = 'veryHard';
			if (msg.includes(['아이']) && msg.includes(['진심'])) size = 'ai';
			this.log('Maze requested');
			setTimeout(async () => {
				const file = await this.genMazeFile(Date.now(), size);
				this.log('Replying...');
				msg.reply(serifs.maze.foryou, { file });
			}, 3000);
			return {
				reaction: 'like'
			};
		} else {
			return false;
		}
	}
}

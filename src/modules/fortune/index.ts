import { bindThis } from '@/decorators.js';
import Module from '@/module.js';
import Message from '@/message.js';
import serifs from '@/serifs.js';
import seedrandom from 'seedrandom';
import { genItem } from '@/vocabulary.js';

export const blessing = [
	'아이길',
	'슈퍼울트라익스트림길',
	'익스트림길',
	'울트라길',
	'슈퍼길',
	'얼티메이트길',
	'기가길',
	'메가길',
	'킬로길',
	'헥토파스칼길',
	'데카길',
	'데시길',
	'센티길',
	'밀리길',
	'마이크로길',
	'나노길',
	'피코길',
	'펨토길',
	'아톰길',
	'젭토키치',
	'역도길',
	'초길',
	'대대길',
	'대길',
	'길',
	'중길',
	'소길',
	'흉',
	'대흉',
];

export default class extends Module {
	public readonly name = 'fortune';

	@bindThis
	public install() {
		return {
			mentionHook: this.mentionHook
		};
	}

	@bindThis
	private async mentionHook(msg: Message) {
		if (msg.includes(['점', '운세', '점괘', '오미쿠지'])) {
			const date = new Date();
			const seed = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}@${msg.userId}`;
			const rng = seedrandom(seed);
			const omikuji = blessing[Math.floor(rng() * blessing.length)];
			const item = genItem(rng);
			msg.reply(`**${omikuji}🎉**\n행운의 아이템: ${item}`, {
				cw: serifs.fortune.cw(msg.friend.name)
			});
			return true;
		} else {
			return false;
		}
	}
}
 
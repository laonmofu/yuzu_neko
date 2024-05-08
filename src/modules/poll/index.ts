import { bindThis } from '@/decorators.js';
import Message from '@/message.js';
import Module from '@/module.js';
import serifs from '@/serifs.js';
import { genItem } from '@/vocabulary.js';
import config from '@/config.js';
import type { Note } from '@/misskey/note.js';

export default class extends Module {
	public readonly name = 'poll';

	@bindThis
	public install() {
		setInterval(() => {
			if (Math.random() < 0.1) {
				this.post();
			}
		}, 1000 * 60 * 60);

		return {
			mentionHook: this.mentionHook,
			timeoutCallback: this.timeoutCallback,
		};
	}

	@bindThis
	private async post() {
		const duration = 1000 * 60 * 15;

		const polls = [ // TODO: Extract serif
		['희귀할 것 같은 것', '여러분은 어떤 것이 가장 희휘하다고 생각하시나요?'],
		['맛있을 것 같은 것', '여러분은 어떤 것이 가장 맛있다고 생각하시나요?'],
		['무거워 보이는 것', '여러분은 어떤 것이 가장 무겁다고 생각하시나요?'],
		['갖고 싶은 것', '여러분은 어떤 것을 가장 갖고싶나요?'],
		['무인도에 가져가고 싶은 것', '여러분은 무인도에 하나 가져갈 수 있다면 어떤 것으로 할건가요?'],
		['집에 꾸미고 싶은 것', '여러분은 집에 장식한다면 어떤 것으로 할건가요?'],
		['팔릴 만한 것', '여러분은 어떤 것이 가장 잘 팔릴 것 같으신가요?'],
		['내리길 바라는 것', '여러분은 어느 것이 하늘에서 내려오길 바라나요?'],
		['휴대하고 싶은 것', '여러분은 어떤 것을 휴대하고 싶으신가요?'],
		['상품화하고 싶은 것', '여러분은 상품화한다면 어떤 것으로 하실건가요?'],
		['발굴될 것 같은 것', '여러분은 유적에서 발굴될 것 같은 것은 어떤 것이라고 생각하시나요?'],
		['좋은 향이 날 것 같은 것', '여러분은 어떤 게 가장 좋은 향이 날 것 같나요?'],
		['높은 가격에 거래될 것 같은 것', '여러분은 어떤 것이 가장 높은 가격에 거래될 것이라고 생각하시나요?'],
		['지구 주회 궤도상에 있을 법한 것', '여러분은 어떤 것이 지구 주회 궤도상을 떠돌아다니고 있다고 생각하시나요?'],
		['선물하고 싶은 것', '여러분은 저에게 선물을 주신다면 어떤 것으로 하실건가요?'],
		['선물 받고 싶은 거', '여러분은 선물로 받는다면 어떤 걸로 하실건가요?'],
		['내가 가질만한 것', '여러분은 내가 가질만한 것이 어떤 것이라고 생각하시나요?'],
		['유행할 것 같은 것', '여러분은 어떤 게 유행할 것 같은가요?'],
		['아침밥', '여러분은 아침밥으로 어떤 것을 먹고 싶으신가요?'],
		['점심', '여러분은 점심으로 어떤 것을 먹고 싶으신가요?'],
		['저녁', '여러분은 저녁으로 어떤 것을 먹고 싶으신가요?'],
		['몸에 좋을 것 같은 것', '여러분은 어떤 것이 몸에 좋을 것 같다고 생각하시나요?'],
		['후세에 남기고 싶은 것', '여러분은 어떤 것을 후세에 남기고 싶으신가요?'],
		['악기가 될 만한 것', '여러분은 어떤 것이 악기가 될 것 같은가요?'],
		['된장국 건더기로 하고 싶은 것', '여러분은 된장국 건더기로 한다면 어떤 것이 좋으신가요?'],
		['뿌리고 싶은 것', '여러분은 어떤 것을 밥에 뿌리고 싶으신가요?'],
		['흔히 볼 수 있는 것', '여러분은 어떤 것을 자주 보시나요?'],
		['길에 빠질 것 같은 것', '여러분은 길에 빠질 것 같은 것이 어떤 것이라고 생각하시나요?'],
		['미술관에 둘 만한 것', '여러분은 이 중에서 미술관에 둘 만한 것은 어떤 것이라고 생각하세요?'],
		['교실에 있을 법한 것', '여러분은 교실에 있을 법한 것이 어떤 것이라고 생각하시나요?'],
		['이모티콘이 되었으면 하는 것', '이모티콘이 되었으면 하는 것은 무엇인가요?'],
		['Misskey 본부에 있을 법한 것', '여러분은 Misskey 본부에 있을 법한 것은 어떤 것이라고 생각하시나요?'],
		['불타는 쓰레기', '여러분은 어떤 게 불타는 쓰레기라고 생각하시나요?'],
		['좋아하는 주먹밥의 건더기', '여러분이 좋아하는 주먹밥은 무엇인가요?'],
		];

		const poll = polls[Math.floor(Math.random() * polls.length)];

		const choices = [
			genItem(),
			genItem(),
			genItem(),
			genItem(),
		];

		const note = await this.ai.post({
			text: poll[1],
			poll: {
				choices,
				expiredAfter: duration,
				multiple: false,
			}
		});

		// タイマーセット
		this.setTimeoutWithPersistence(duration + 3000, {
			title: poll[0],
			noteId: note.id,
		});
	}

	@bindThis
	private async mentionHook(msg: Message) {
		if (!msg.or(['/poll']) || msg.user.username !== config.master) {
			return false;
		} else {
			this.log('Manualy poll requested');
		}

		this.post();

		return true;
	}

	@bindThis
	private async timeoutCallback({ title, noteId }) {
		const note: Note = await this.ai.api('notes/show', { noteId });

		const choices = note.poll!.choices;

		let mostVotedChoice;

		for (const choice of choices) {
			if (mostVotedChoice == null) {
				mostVotedChoice = choice;
				continue;
			}

			if (choice.votes > mostVotedChoice.votes) {
				mostVotedChoice = choice;
			}
		}

		const mostVotedChoices = choices.filter(choice => choice.votes === mostVotedChoice.votes);

		if (mostVotedChoice.votes === 0) {
			this.ai.post({ // TODO: Extract serif
				text: '투표가 없었어요.',
				renoteId: noteId,
			});
		} else if (mostVotedChoices.length === 1) {
			this.ai.post({ // TODO: Extract serif
				cw: `${title}의 투표 결과입니다!`,
				text: `결과는 ${mostVotedChoice.votes}표의 「${mostVotedChoice.text}」였습니다!`,
				renoteId: noteId,
			});
		} else {
			const choices = mostVotedChoices.map(choice => `「${choice.text}」`).join('와');
			this.ai.post({ // TODO: Extract serif
				cw: `${title}의 투표 결과입니다!`,
				text: `결과는 ${mostVotedChoice.votes}표의 ${choices}입니다!`,
				renoteId: noteId,
			});
		}
	}
}

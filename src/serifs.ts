// せりふ

export default {
	core: {
		setNameOk: name => `알겠습니다! 앞으로는 ${name}라고 부를게요!`,

		san: '~님과 같은 호칭이 필요하신가요?',

		yesOrNo: '「응」이나 「아니」정도밖에 모르겠어요...',

		hello: name => name ? `안녕하세요, ${name}♪` : `반가워요♪`,

		helloNight: name => name ? `좋은 저녁이에요. ${name}♪` : `좋은 저녁♪`,

		goodMorning: (tension, name) => name ? `좋은 아침이에요, ${name}！${tension}` : `좋은 아침! ${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: name => name ? `안녕히 주무세요. ${name}！` : '좋은 꿈 꾸세요!',

		omedeto: name => name ? `감사합니다! ${name}♪` : '고마워요♪',

		erait: {
			general: name => name ? [
				`${name}, 오늘도 훌륭합니다!`,
				`${name}은 오늘도 훌륭해요~♪`
			] : [
				`오늘도 대단해요!`,
				`오늘도 대단하신걸요~♪`
			],

			specify: (thing, name) => name ? [
				`${name}, ${thing} 정말 대단합니다!`,
				`${name}, ${thing} 정말 대단하신걸요~♪`
			] : [
				`${thing} 정말 훌륭해요！`,
				`${thing} 정말 훌륭한걸요~♪`
			],

			specify2: (thing, name) => name ? [
				`${name}, ${thing}으로 훌륭합니다!`,
				`${name}, ${thing}으로 대단해요~♪`
			] : [
				`${thing}이라 대단합니다!`,
				`${thing}이라서 훌륭하신걸요~♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`${name} 어서 오세요♪`,
				`${name}, 어서 오세요.`
			] : [
				'어서오세요♪',
				'어서 오세요, 주인님.'
			],

			love2: name => name ? `${name}, 어서 오세요. ♡` : '주인님, 어서 오세요...! ♡',

			normal: name => name ? `${name} 어서 오세요!` : '어서 오세요!',
		},

		itterassyai: {
			love: name => name ? `${name}, 잘 갔다 와요♪` : '잘 다녀와♪',

			normal: name => name ? `${name} 잘 다녀오세요!` : '조심히 다녀오세요!',
		},

		tooLong: '너무 긴 것 같아요...',

		invalidName: '발음이 너무 어려운 것 같은데요...?',

		nadenade: {
			normal: '헉...! 깜짝 놀랐어요.',

			love2: ['아우우... 부끄러워요...', '으으... 조금 부끄러워요.', '우왓...'],

			love3: ['음... 감사합니다♪', '왠지 안정되네요♪', '음... 안심이에요.', '왠지 졸린 것 같아요...'],

			hate1: '...! 그만 하셨으면 좋겠어요...',

			hate2: '괜찮습니다...',

			hate3: null,

			hate4: null
		},

		kawaii: {
			normal: ['감사해요♪', '쑥쓰러워요...'],

			love: ['반가워요♪', '쑥쓰러워요...'],

			hate: '... 감사합니다.'
		},

		suki: {
			normal: '헉... 감사합니다♪',

			love: name => `저도... ${name}을 좋아해요!`,

			hate: null
		},

		hug: {
			normal: '꼬옥...',

			love: '꼬옥♪',

			hate: null
		},

		humu: {
			love: '그, 그러니까.... 후미후미... 어때요...?',

			normal: '에에... 그건 조금...',

			hate: '......'
		},

		batou: {
			love: '그러니까... 어... 바보...?',

			normal: '(응시한다...)',

			hate: '... 머리 괜찮으신거죠...?'
		},

		itai: name => name ? `${name} 괜찮아요...? 아프지 않으셨으면 좋겠어요.` : '괜찮으신가요...? 아픈 건 모두 없어져버려라!',

		ote: {
			normal: '히잉... 저는 강아지가 아니라구요...?',

			love1: '멍!',

			love2: '멍멍♪',
		},

		shutdown: '저 아직 안 졸린데요...?',

		transferNeedDm: '알겠어요. 그건 메시지로 이야기하지 않을래요?',

		transferCode: code => `알겠어요. \n표어는 ${code}」입니다!`,

		transferFailed: '으음... 표어가 틀리지 않았나요?',

		transferDone: name => name ? `헉...! ${name} 어서 오세요!` : `헉...! 어서 오세요!`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... 외웠어요♪)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} 이에요!`
	},

	birthday: {
		happyBirthday: name => name ? `${name} 생일 축하해요! 🎉` : '생일을 축하합니다! 🎉',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: '좋아요~',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: '미안해요... 지금 리버시는 하지 말라고 하시네요...',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `대국을 시작했습니다!\n(이름: ${name}, 강도: ${strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(${name}의 대국을 시작했습니다.)`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `${name}을 이겼어요♪`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}을 대국에서 이겨버렸어요...)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `${name}에게 졌어요...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}을 대국에서 져 주었어요♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}과 비겼어요~`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}과 대국에서 비겨버렸어요...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}이 항복했어요.`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}과 대국 중에 항복해버렸어요... 죄송해요...)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: '어라? 게임은 이미 시작했어요!',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: '메시지로 해주세요!',

		/**
		 * ゲーム開始
		 */
		started: '0부터 100까지 비밀의 수를 맞춰보세요♪',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '숫자로 해주세요! 「그만」이라고 말하면 게임을 그만둘 수 있어요.',

		/**
		 * 中止を要求されたとき
		 */
		cancel: '알겠습니다! 감사해요♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}보다는 큰 것 같아요.`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `다시 한 번 말하지만, ${num}보다는 큽니다!`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}보다 작네요.`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `다시 말하지만, ${num}보다는 작아요!`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `정답입니다! 🎉 (${tries}회차에 맞췄어요)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '지금 막 시작했어요~',

		matakondo: '대음에 또 해요!',

		intro: minutes => `여러분! 숫자 맞추기 놀이 해요♪\n0부터 100 사이에서, 가장 큰 숫자를 따낸 사람이 승리에요! 다른 사람이랑 겹치면 안돼요~\n제한시간은 ${minutes}분입니다. 숫자는 이 투고에 댓글로 보내주세요!`,

		finish: '게임 결과를 발표하겠습니다!',

		finishWithWinner: (user, name) => name ? `이번에는${user}(${name})의 승리에요! 다음에 또 해요♪` : `이번에는 ${user}의 승리에요! 또 해요♪`,

		finishWithNoWinner: '이번에는 승리자가 없었어요... 또 해요♪',

		onagare: '참가자가 모이지 않았기 때문에 게임이 사라져버렸어요...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `이런 건 어때요? → ${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `제가 오늘의 ${name} 운세를 점쳐봤어요...` : '제가 오늘 선생님의 운세를 점쳤어요♪',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: '알겠어요!',

		invalid: '으...음?',

		tooLong: '너무 긴 것 같아요...',

		notify: (time, name) => name ? `${name}, ${time} 지났습니다!` : `${time} 지났어요!`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: '으음...？',

		doneFromInvalidUser: '장난을 정말 나빠요ー!',

		reminds: '할 일 목록이에요♪',

		notify: (name) => name ? `${name} 이거 했어요?` : `이거 하신거 맞죠?`,

		notifyWithThing: (thing, name) => name ? `${name}、「${thing}」 했어요?` : `「${thing}」 하신거 맞요？`,

		done: (name) => name ? [
			`잘했어요, ${name}♪`,
			`${name}, 역시 대단해요!`,
			`${name}, 너무 멋저요...!`,
		] : [
			`잘하셨어요♪`,
			`해낼 거라고 믿었어요!`,
			`정말 대단해요...!`,
		],

		cancel: `알겠습니다.`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name} 그으... 초콜릿을 만들었는데, 괜찮으시다면 드세요! 🍫` : '초콜릿을 만들었어요. 괜찮으시다면! 🍫',
	},

	server: {
		cpu: '소행성의 심장이 불타고 있어요... 괜찮겠죠?'
	},

	maze: {
		post: '오늘의 미로에요! #AiMaze',
		foryou: '그려드렸어요!'
	},

	chart: {
		post: '인스턴스의 노트 개수에요!',
		foryou: '그렸어요♪'
	},

	checkCustomEmojis: {
		post: (server_name, num) => `${server_name}에 ${num}개의 커스텀 이모지가 추가되었어요!`,
		emojiPost: emoji => `:${emoji}:\n(\`${emoji}\`) #AddCustomEmojis`,
		postOnce: (server_name, num, text) => `${server_name}에 ${num}개의 이모지가 추가되었어요!\n${text} #AddCustomEmojis`,
		emojiOnce: emoji => `:${emoji}:(\`${emoji}\`)`
	},

	sleepReport: {
		report: hours => `으음... ${hours}시간 정도 잠들어버린 것 같아요.`,
		reportUtatane: '으... 낮잠에 들어버렸어요...',
	},

	noting: {
		notes: [
			'딩굴댕굴...',
			'조금 졸려요...',
			'그거 좋은데요?',
			'(。´･ω･)?',
			'후우ー',
			'어...이걸 이렇게... 어라ー?',
			'머엉ー...',
			'휴우... 지쳤어요',
			'된장국을 만들까요?',
			'식사를 할까요? 아니면 저...?',
			'후냐아아아아앙!?',
			'인터넷에 제 그림이 더욱 많아졌으면 좋겠어요♪',
			'미스키ー, 정말로 귀여운 이름이에요!',
			'우우... 리버시는 어려워요.',
			'실패하더라도, 만회할 수 있다면 플러스네요♪',
			'왠지 배가 고파졌어요.',
			'청소라는 건 정기적으로 해야 해요?!',
			'오늘도 근무하시느라 수고가 많으십니다! 저도 열심히 할게요♪',
			'그러니까, 뭐 하려고 했더라...?',
			'세상에서 집이 제일 좋아요...',
			'피곤하면 제가 쓰담쓰담 해드릴게요♪',
			'떨어져 있지만, 마음만은 곁에 있어요♪',
			'아이에요~', //유즈버전 작업시 개변 요망
			'댕댕이는 귀여워요.',
			'프로그램?',
			'고로롱ー...',
			'아무것도 하지 않았는데, 컴퓨터가 고장나버렸어요...',
			'Have a nice day♪',
			'이불에 잡아먹혀버렸어요',
			'자면서 보고 있어요...',
			'염력으로 조작하고 있어요.',
			'가상 공간에서 보내드리는 글입니다♪',
			'오늘은 고양이별 중앙지부에 와 있어요!',
			'고양이별 본부는 소행성 K23QM2W에 있어요♪',
			'고양이별 본부에는... 개다래나무가 많아요!',
			'꼬리는 없는데요?!', //유즈버전 작업시 개변 요망
			'헉...!\n고양이 귀는 만지면 간지라워요♪',
			'데몬코어라는 건 무엇일까요?',
			'이 복장, 귀여워서 정말 좋은 것 같아요♪',
			'푹신한 이불은 언제나 기분 좋아요...',
			'메이드복, 잘 어울릴까...?',
			'고양이처럼 사는게 꿈이야!...라고, 라온님이 말했었어요.',
			'에에.. 주인님, 어디 보고 있어요?',
			'저를 들여다보고 계신다면, 저 또한 주인님을 들여다보고 있어요♪',
			'네, 아이입니다♪', //유즈버전 작업시 개변 요망
			'크음...',
			'All your note are belong to me!',
			'당신의 모든 노트는 이제부터 제 겁니다!',
			'모처럼이니까, 저는 이 빨간색 문을 고를래요!',
			'좋았어♪',
			'( ˘ω˘)',
			'(｀・ω・´)',
			'실례합니다...!',
			'아침부터 저녁까지. 당신의 아이에요~', //유즈버전 작업시 개변 요망
			'미스키 개발자의 아침은 늦게 시작하는 편이래요...',
			'냐오...',
			'냥냥！',
			'위에서 옵니다! 조심하세요!',
			'후냐앙...',
			'후아암...',
			'냐앙~',
			'후아... 너무너무 잠와요ー',
			'ヾ(๑╹◡╹)ﾉ"',
			'저의 "인스턴스"를 주위에 전개하여 분신하는 것이 특기에요!\n인원수만큼의 에너지 소비가 있기 때문에, 4명정도가 한계입니다만...',
			'졸려졸려...',
			'후아ー、메모리가 오장육부에 스며드는 것 같아요.',
			'i pwned you!',
			'기웃기웃',
			'야옹♪',
			'(*>ω<*)',
			'싱글벙글ー♪',
			'냥ー?!',
			'냥풋푸~',
			'아이가 왔어요♪',
			'으아악?!',
			'뭐야？',
		],
		want: item => `${item}, 정말정말 갖고 싶어요...`,
		see: item => `모처럼 산책을 하고 있었는데, 길에 ${item}이 떨어져있는 것을 봤어요.`,
		expire: item => `알고 보니, ${item}의 유통기한이 지나있었네요...`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}

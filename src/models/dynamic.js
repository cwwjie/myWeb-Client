const dynamicList = [
	{
		whichGroup: { // 所属分组的信息
			id: 0,
			name: '分组一'
		},

		title: '玻璃球测临界点问题《动态规划》按照最久远时间↑按照最久远时间↑按照最久远时间↑',
		content: '有一栋100层高的大楼，给你两个完全相同的玻璃球完全相同的玻璃球。假设从某一层开始，丢下玻璃球会摔碎。请用最少步数测出小球破裂高度的最小次数。 层高的大楼，给你两个完全相同的玻璃球。假设从某一层开始，丢下玻璃球会摔碎。请用最少步数测出小球破裂高度的最小次数。 ',
		approved: 0,
		read: 0,
		time: 1523467674000,
	}, {
		whichGroup: { // 所属分组的信息
			id: 0,
			name: '分组一'
		},

		title: 'Android开发 获取屏幕宽高及尺寸的方法',
		content: '第一个实验是让人去数传球的次数(传球比较快)，期间让一个穿着猩猩公仔服的人走过传球的人群后面，甚至做了比较夸张的pose，但是事后多数受试者都报告没有发现猩猩。但是根据通过眼球移动轨迹的分析，他们的视线跟着猩猩移动过的，在猩猩身上停',
		approved: 0,
		read: 0,
		time: 1523467674000,
	}, 
]

const dynamicGroup = [
	{
		id: 0,
		name: '分组一',
		amountOwned: 2, // 一共拥有几条信息
		children: [
			{
				whichGroup: { // 所属分组的信息
					id: 0,
					name: '分组一'
				},

				title: 'Android开发 获取屏幕宽高及尺寸的方法',
				content: '奥林巴斯TG-4防水相机 水下相机出租租赁 层高的大楼，给你两个完全相同的玻璃球。假设从某一层开始，丢下玻璃球会摔碎。请用最少步数测出小球破裂高度的最小次数。 ',
				approved: 0,
				read: 0,
				time: 1523467674000,
			}, {
				whichGroup: { // 所属分组的信息
					id: 0,
					name: '分组一'
				},

				title: '玻璃球测临界点问题《动态规划》按照最久远时间↑按照最久远时间↑按照最久远时间↑',
				content: '有一栋100层高的大楼，给你两个完全相同的玻璃球完全相同的玻璃球。假设从某一层开始，丢下玻璃球会摔碎。请用最少步数测出小球破裂高度的最小次数。 层高的大楼，给你两个完全相同的玻璃球。假设从某一层开始，丢下玻璃球会摔碎。请用最少步数测出小球破裂高度的最小次数。 ',
				approved: 0,
				read: 0,
				time: 1523467674000,
			}, 
		]
	}, {
		id: 1,
		name: '分组二',
		amountOwned: 0,
		children: []
	}, {
		id: 2,
		name: '分组三',
		amountOwned: 4,
		children: [
			{
				whichGroup: { // 所属分组的信息
					id: 2,
					name: '分组三'
				},
				title: '如何评价英超 2017-2018 赛季曼城 2:3 曼联的比赛？',
				content: '第一个实验是让人去数传球的次数(传球比较快)，期间让一个穿着猩猩公仔服的人走过传球的人群后面，甚至做了比较夸张的pose，但是事后多数受试者都报告没有发现猩猩。但是根据通过眼球移动轨迹的分析，他们的视线跟着猩猩移动过的，在猩猩身上停',
				approved: 0,
				read: 0,
				time: 1523467674000,
			}, {
				whichGroup: { // 所属分组的信息
					id: 2,
					name: '分组三'
				},
				title: '为什么看时间经常看到特定的某个时刻，比如几点的44分？',
				content: '在20世纪70年代以前，心理学家普遍认为人能够意识到形成判断和行为的认知加工，能够监督和控制这些加工。然而，现在这种观点已经完全被扭转——人存在几乎没有意识、目的、控制和努力的判断和行为，我们会对各种物体、人物和情景作出自动化的反应(这种反应一般被认为是高效的，因此与有意识的控制性 层高的大楼，给你两个完全相同的玻璃球。假设从某一层开始，丢下玻璃球会摔碎。请用最少步数测出小球破裂高度的最小次数。 ',
				approved: 0,
				read: 0,
				time: 1523467674000,
			}, {
				whichGroup: { // 所属分组的信息
					id: 2,
					name: '分组三'
				},
				title: '常健身的魁梧男性徒手夺取常人握住的刀具，可能性如何？',
				content: '高中开运动会，班里一个男生混在女生堆里，说女孩的手臂上有一条处女线，没有这个线的就不是处女。几个女生嫌这个男生说话难听，就撸起袖子让他看，老子有男朋友也有线。到我的时候，很尴尬，不想让他看 ，老子没男朋友也没线，但老子的的确确是个黄花大闺 ',
				approved: 0,
				read: 0,
				time: 1523467674000,
			}, {
				whichGroup: { // 所属分组的信息
					id: 2,
					name: '分组三'
				},
				title: '艺术生觉得哪些知识不知道是非艺术生的遗憾？',
				content: '我觉得不懂艺术最令人遗憾的，是人生将会必须去取舍，他们必须去区分什么是对自己“有用的”什么是“无用的”。然后为了追求“有用的”而去修剪身上“无用的”东西。这样人很容易变成一根光秃秃的棍子，除了段主枝就没有别的了。而搞艺术最值得骄傲和幸福的 层高的大楼，给你两个完全相同的玻璃球。假设从某一层开始，丢下玻璃球会摔碎。请用最少步数测出小球破裂高度的最小次数。 ',
				approved: 0,
				read: 0,
				time: 1523467674000,
			}, 
		]
	}
]

const dynamic = {
	data: {
		namespace: 'dynamic',

		state: {
			total: 100,        // 一共多少条数据
			list: dynamicList, // 所有动态的数据

			group: dynamicGroup, // 所有分组的数据
			selectGroupId: 0,    // 选中的分组 默认第0 组

			preview: {        // 预览页面
				title: '',
				content: '',
			},
			edit: {           // 编辑的相关数据
				whichGroup: { // 所属分组的信息
					id: 0,
					name: ''
				},
				title: '',
				content: '',
				approved: 0,
				read: 0,
				time: 1600000000000,
			}
		},

		reducers: {	
			setSelectGroupId(state, data) { // 设置 选中的分组id
				return {
					...state,
					selectGroupId: data.selectGroupId
				}
			},

			setEditTitle(state, data) { // 设置编辑页面的标题
				let newEdit = JSON.parse(JSON.stringify(state.edit));

				newEdit.title = data.title
				return {
					...state,
					edit: newEdit
				}
			},

			setEditContent(state, data) { // 设置编辑页面的内容
				let newEdit = JSON.parse(JSON.stringify(state.edit));

				newEdit.content = data.content
				return {
					...state,
					edit: newEdit
				}

			},

			initEditPage(state, data) { // 设置 编辑页面的相关数据
				return { //  初始化 selectGroupId 以及 edit preview
					...state,
					selectGroupId: data.selectGroupId,
					edit: data.edit,
					preview: data.preview,
				}

			},
		}
	},

	init: function (app) {
		// app._store.dispatch({
		// 	type: 'dynamic/reducers',
		// 	data: ''
		// });
	}
}

export default dynamic;

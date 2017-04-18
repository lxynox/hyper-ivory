const bgColors = [
	'#ffffff',
	'rgba(253, 245, 221, 0.6)',
	'ivory',
	'azure',
	'whitesmoke',
	'aliceblue',
	'snow',
	'seashell',
	'mintcream',
	'linen',
	'honeydew',
	'floralwhite',
	'ghostwhite'
]

const backgroundColor = rand(bgColors)
	, foregroundColor = '#607D8B'
	, accent = 'blueviolet'
	, secondary = 'darkseagreen'

const red = 'darksalmon'
	, green = 'darkseagreen'
	, yellow = 'darkkhaki'
	, blue = 'royalblue'
	, magenta = accent
	, cyan = 'skyblue'

exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		fontFamily: 'Source Code Pro for Powerline, Helvetica Neue, monospace',
		cursorShape: 'UNDERLINE',
		backgroundColor,
		foregroundColor,

		borderColor: backgroundColor,
		cursorColor: accent,

		colors: {
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			lightRed: red,
			lightGreen: green,
			lightYellow: yellow,
			lightBlue: blue,
			lightMagenta: magenta,
			lightCyan: cyan,
		},

		css: `
			${config.css || ''}
			.tabs_nav .tabs_list .tab_text {
				color: ${secondary}
			}
			.tabs_nav .tabs_title {
				color: ${secondary}
			}
			.tabs_nav .tab_active {
				border-bottom: 2px solid ${accent} !important
			}
			.tabs_nav .tab_active .tab_text {
				color: ${accent};
				font-weight: 600;
			}
		`
	})
}

function rand(arr = [], min = 0, max) {
	if (!Array.isArray(arr)) {
		throw new Error('First argument must be array!')
	}
	max = max || arr.length
	if (!Number.isInteger(min) || !Number.isInteger(max)) {
		throw new Error('Second/third argument must be integer!')
	}
	if (min > max) {
		throw new Error('Min index can not be greater than max index!')
	}
	const delta = max - min
	const randIndex = min + Math.floor(delta * Math.random())
	return arr[randIndex]
}

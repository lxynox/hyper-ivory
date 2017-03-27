const backgroundColor = 'ivory'
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
		fontFamily: 'Monaco, Helvetica Neue, monospace',
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

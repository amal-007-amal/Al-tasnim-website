module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js,vue}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            keyframes: {
                zoom: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.1)" },
                },
            },
            animation: {
                "zoom-slow": "zoom 10s ease-in-out infinite",
            },
            gridColumn: {
                'span-12-span-9': 'span 12 / span 9',
            },
            colors: {
                primarycolor: '#1E398D',
                textgray: '#4D555B',
                secondary: '#F47920',
                textcolor: '#FFFFFF',
                textdarkgray: '#555555',
                orangegradient: '#FBB67B',
            },
            keyframes: {
                grow: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.2)' },
                },
                zoomOut: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0.8)' },
                },
            },
            animation: {
                grow: 'grow 19s linear forwards',
                zoomOut: 'zoomOut 19s linear forwards',
            },
        },
    },
    plugins: [],
}
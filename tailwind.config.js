/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'pine-green': {50:'#007c77'},
                'russian-violet': {50:'#4C1A57'},
                'razzle-dazzle-rose': {50:'#FF3CC7'}
            }
        },
        container: {
            center: true,
        }
    },
    plugins: [],
}

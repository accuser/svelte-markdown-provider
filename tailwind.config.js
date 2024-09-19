import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['src/**/*.svelte'],
    theme: {
        extend: {
            typography(theme) {
                return {
                    DEFAULT: {
                        css: {
                            'code::before': {
                                content: 'none',
                            },
                            'code::after': {
                                content: 'none',
                            },
                        },
                    }
                }
            }
        },
    },
    plugins: [typography()],
}

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
                            code: {
                                color: 'var(--tw-prose-pre-bg)',
                                backgroundColor: 'var(--tw-prose-pre-code)',
                                borderRadius: theme('borderRadius.DEFAULT'),
                                paddingLeft: theme('spacing.1'),
                                paddingRight: theme('spacing.1'),
                                paddingTop: theme('spacing[0.5]'),
                                paddingBottom: theme('spacing[0.5]'),
                            },
                        },
                    }
                }
            }
        },
    },
    plugins: [typography()],
}

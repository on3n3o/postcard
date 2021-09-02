const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { boxShadow } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                black: '#131313',
                gray: colors.trueGray
            },
            boxShadow: {
                'inner': 'inset -30px -30px 30px -30px rgba(255, 255, 255, 0.02), inset 30px 30px 30px -30px rgba(0, 0, 0, 0.3)',
                'dark-lg': '10px 10px 15px -3px rgba(0, 0, 0, 1), 10px 4px 6px -2px rgba(0, 0, 0, 0.25), -10px -10px 20px -10px rgba(255, 255, 255, 0.05)',
            },
            width: {
                '200px': '200px',
                '400px': '400px',
            }
            
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms')],

    darkMode: 'class',
};

'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#6799FF',
            light: '#D6F0FF',
            dark: '#B2CCFF',
            contrastText: '#fff',
        },
        secondary: {
            main: '#dc004e',
            light: '#ff5c8d',
            dark: '#9a0036',
            contrastText: '#000',
        },
        background: {
            default: '#ffffff',
            paper: '#fff',
        },
        text: {
            primary: '#000',
            secondary: '#555',
            disabled: '#aaa',
        },
        error: {
            main: red.A400,
        },
        warning: {
            main: '#ffa726',
        },
        info: {
            main: '#29b6f6',
        },
        success: {
            main: '#66bb6a',
        },
        action: {
            active: '#001E3C',
            hover: 'rgba(0, 30, 60, 0.08)',
            selected: 'rgba(0, 30, 60, 0.16)',
            disabled: 'rgba(0, 30, 60, 0.3)',
            disabledBackground: 'rgba(0, 30, 60, 0.12)',
            focus: 'rgba(0, 30, 60, 0.12)',
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '0.9rem',
            fontWeight: 500,
            color: '#8C8C8C'
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 400,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
        },
        button: {
            textTransform: 'none',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 400,
        },
    },
    shape: {
        borderRadius: 2,
    },
    spacing: 4,
    components: {
        MuiStack: {
            defaultProps: {
                borderColor:'#BDBDBD'
            }
        },
        MuiButton: {
            // defaultProps: {
            //     color: 'primary'
            // },
            // styleOverrides: {
            //     root: {
            //         color:'#000000',
            //         backgroundColor:'#ffffff',
            //         textTransform: 'none',
            //         borderColor: '#0000ff',
            //         '&:hover': {
            //             borderColor: '#00ff00',
            //         },
            //     },
            // },
        }
    }
});

export default theme;
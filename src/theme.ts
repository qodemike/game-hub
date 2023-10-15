import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = { // Theme is an object that we imported inorder to access it's properties
    initialColorMode: 'dark'
}

const theme = extendTheme({
    config,
    colors:{
        gray:{
            // 200: '#bfbfbf',
            // 300: '#a6a6a6',
            // 400: '#8c8c8c',
            // 500: '#737373',
            // 600: '#595959',
            700: '#191D25',//
            800: '#0E1015',
            // 900: '#0d0d0d'
            // #010409 preserve
        }
    },
});

export default theme
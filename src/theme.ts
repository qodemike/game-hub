import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = { // Theme is an object that we imported inorder to acces it's properties
    initialColorMode: 'dark'
}

const theme = extendTheme({config});

export default theme
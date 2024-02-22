import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import "./index.css";
import theme from "./theme.ts";
import { AuthContextProvider } from "./context/AuthContextProvider.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
      // staleTime: 24 * 60 * 60 * 1000, // 24hrs
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
        <RouterProvider router={router} />
        </AuthContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./theme";
import Router from "./Router";
import { HelmetProvider } from "react-helmet-async";

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </ChakraProvider>
  </BrowserRouter>
);

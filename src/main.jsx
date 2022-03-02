import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
});

const moralisAppId = "b9yHTtEcO8RZVxROHEVAfdslz0yqIYSblsJIwAwW";
const moralisServerURL = "https://h9w2sjiy2ovk.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
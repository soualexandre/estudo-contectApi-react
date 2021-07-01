import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {AuthProvider} from './providers/auth'
import {CardProvider} from './providers/cardProvider'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CardProvider>     
         <App />
      </CardProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

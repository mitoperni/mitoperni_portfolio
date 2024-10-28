import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="...loading">
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>
);

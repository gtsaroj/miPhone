import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loader from "./Loader/Loader";
import { ContextProvider } from "./Context/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Suspense>
  </React.StrictMode>
);

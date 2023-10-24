import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base/normalize.scss";
import App from "./pages/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

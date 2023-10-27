import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base/normalize.scss";
import Homepage from "./pages/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Homepage />
    </React.StrictMode>
);

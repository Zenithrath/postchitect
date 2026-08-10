import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const resetScrollPosition = () => window.scrollTo(0, 0);
resetScrollPosition();
window.addEventListener("pageshow", resetScrollPosition, { once: true });
window.addEventListener("load", resetScrollPosition, { once: true });
window.requestAnimationFrame(resetScrollPosition);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

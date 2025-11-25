import { init } from "./controller/controller.js";

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
    init();
});
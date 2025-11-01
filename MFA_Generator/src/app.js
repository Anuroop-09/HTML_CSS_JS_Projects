import { init } from "./controller/controller.js";

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
    init();
});
import { commandsData } from "./data.js";

document.addEventListener('DOMContentLoaded', () => {

    // HELPER FUNCTIONS
    const generateCmdsList = function (listOfCmds) {
        let markUpList = [];
        listOfCmds.forEach(item => {
            const htmlMarkUp = `
            <li class="section__item">
                <div class="block">
                    <span class="block__command">${item?.cmdValue}</span>
                    <span class="block__copy">
                        <svg class="copy-icon">
                            <use xlink:href="public/svgs/sprite.svg#icon-copy"></use>
                        </svg>
                        <svg class="tick-icon">
                            <use xlink:href="public/svgs/sprite.svg#icon-checkmark"></use>
                        </svg>
                        <span class="block__info">copied</span>
                    </span>
                </div>
                <div class="description">
                    <p class="description__text">${item?.cmdDescription}</p>
                </div>
            </li>`;
            markUpList.push(htmlMarkUp);
        });

        return markUpList.join("");
    }

    const generateSections = function (sectionsData) {
        let sectionList = [];
        sectionsData.forEach(item => {
            const htmlMarkUp = `
            <section class="section">
                <h2 class="section__title">${item?.sectionTitle}</h2>
                <ul class="section__list">
                   ${generateCmdsList(item?.listOfCmds)} 
                </ul>
            </section>`;
            sectionList.push(htmlMarkUp);
        });
        return sectionList.join("");
    }

    const showOrHideCopyIcon = function (element, state) {
        element.classList.toggle(state);
    }

    const setBorderColor = function (element) {
        element.classList.toggle("block__copy--border");
    }

    const showOrHideCopyState = function (element) {
        const copyInfoEle = element.querySelector("span.block__info");
        copyInfoEle.classList.toggle("block__info--show");
    }

    const handleCopyAnimation = function (element) {
        const copyIcon = element.querySelector("svg.copy-icon");
        const tickIcon = element.querySelector("svg.tick-icon");
        showOrHideCopyIcon(copyIcon, "copy-icon--hide");
        setBorderColor(element);
        showOrHideCopyIcon(tickIcon, "tick-icon--show");
        showOrHideCopyState(element);
        setTimeout(() => {
            showOrHideCopyIcon(tickIcon, "tick-icon--show");
            setBorderColor(element);
            showOrHideCopyIcon(copyIcon, "copy-icon--hide");
            showOrHideCopyState(element);
        }, 1000);
    }

    const handleCommandCopy = function (e) {
        const listItemParent = e.target.closest(".section__item");
        const cmdValue = listItemParent.querySelector(".block__command").innerText;
        navigator.clipboard.writeText(cmdValue);
    }

    // LOCATORS
    const contentSpace = document.getElementById("content");
    contentSpace.insertAdjacentHTML('beforeend', generateSections(commandsData));

    const listItems = document.querySelectorAll(".section__item");
    listItems.forEach(listItem => {
        listItem.addEventListener('click', (e) => {
            const copyBtnBlock = e.target.closest("span.block__copy");
            if (!copyBtnBlock) return;
            handleCommandCopy(e);
            handleCopyAnimation(copyBtnBlock);
        });
    })
});


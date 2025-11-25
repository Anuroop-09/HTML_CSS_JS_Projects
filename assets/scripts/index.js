import { SectionsListData } from "./data/SectionsListData.js";

window.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById("container");

    const generateProjectListMarkUp = function(projectsList) {
        try {
            const items = [];
            projectsList.forEach(listItem => {
                const { imageSrc, altImgText, projectTitle, tags, appLink } = listItem;
                const markUp = `
                <li class="section__item">
                    <div class="card">
                        <img src="${imageSrc}" alt="${altImgText}" class="card__img">
                        <div class="card__info">
                            <h3 class="card__title">${projectTitle}</h3>
                            <div class="card__tags">
                                ${tags.map(tag => `<p class="card__tag card__tag--${tag}">${tag}</p>`).join("")}
                            </div>
                        </div>
                        <a href="${appLink}" class="card__link" target="_blank">start app</a>
                    </div>
                </li>`
                items.push(markUp);
            });
            return items.join("");
        } catch (error) {
            console.error(`An error occured in generateProjectListMarkUp`, error);
        }
    }

    const generateSectionsMarkUp = function(sectionsList) {
        try {
            const items = [];
            sectionsList.forEach(section => {
                const { sectionId, sectionTitle, projectsList } = section;
                const markUp = `
                <section class="section" id="${sectionId}">
                    <h2 class="section__title">${sectionTitle}</h2>
                    <ul class="section__list">
                        ${generateProjectListMarkUp(projectsList)}
                    </ul>
                </section>`;
                items.push(markUp);
            });
            return items.join("");
        } catch (error) {
            console.error(`An error occured in generateSectionsMarkUp`, error);
        }
    }

    mainContainer.insertAdjacentHTML("beforeend", generateSectionsMarkUp(SectionsListData));
    
});
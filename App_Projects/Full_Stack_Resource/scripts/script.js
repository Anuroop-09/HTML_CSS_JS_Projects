import { frontEndResources } from "./front-end-docs.js";
import { appBreweryResources } from "./app-brewery.js";
import { appResources } from "./app.js";
import { frameWorkResources } from "./frameworks.js";
import { blogResources } from "./blogs.js";
import { extensionResources } from "./extensions.js";

const frontEndContentBox = document.querySelector('.section__frontend #content__box');
const appBrewerContentBox = document.querySelector('.section__appbrewery #content__box');
const appContentBox = document.querySelector('.section__apps #content__box');
const frameworkContentBox = document.querySelector('.section__framework #content__box');
const blogContentBox = document.querySelector('.section__blogs #content__box');
const extensionContentBox = document.querySelector('.section__extension #content__box');
const sectionHeader = document.getElementById('header');
const returnToTop = document.getElementById('return-top');

// Display Data handler
function displayData() {
    frontEndContentBox.innerHTML = "";
    appBrewerContentBox.innerHTML = "";
    appContentBox.innerHTML = "";
    frameworkContentBox.innerHTML = "";
    blogContentBox.innerHTML = "";
    extensionContentBox.innerHTML = "";
    const frontEndData = frontEndResources;
    const appBreweryData = appBreweryResources;
    const appsData = appResources;
    const frameWorkData = frameWorkResources;
    const blogData = blogResources;
    const extensionData = extensionResources;
    
    loopData(frontEndData, frontEndContentBox, 'front-end');
    loopData(appBreweryData, appBrewerContentBox, 'app-brewery');
    loopData(appsData, appContentBox, 'apps');
    loopData(frameWorkData, frameworkContentBox, 'apps');
    loopData(blogData, blogContentBox, 'blog');
    loopData(extensionData, extensionContentBox, 'extension');
}

// Loop handler
function loopData (items, element, imgFolder) {
    for (const item of items) {
        const html = `
        <div class="col d-flex">
            ${item?.deprecate === true ? '<p class="col__deprecate">Deprecated</p>' : "" }
            <div class="col__main d-flex">
                <img src="./public/img/${imgFolder}/${item.img}" alt="" class="col__img">
                <h2 class="heading-secondary">
                    <a target="_blank" href="${item.link}" class="heading-secondary--link">${item.title}</a>
                </h2>
            </div>
            <p class="col__text">${item.content}</p>
        </div>`;

        element.insertAdjacentHTML('beforeend', html);
    }
}

displayData();

const returnToTopCallBack = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        returnToTop.style.visibility = 'initial';
        returnToTop.style.opacity = '1';
    }   
    else { 
        returnToTop.style.visibility = 'hidden';
        returnToTop.style.opacity = '0';
    }
}
const returnToTopObserver = new IntersectionObserver(returnToTopCallBack, {
    root: null,
    threshold: 0
});
returnToTopObserver.observe(sectionHeader);
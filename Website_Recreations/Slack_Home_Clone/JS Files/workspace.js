import { PioneerStudios, AstroInnovations, CardinalSystems } from "./teamsData.js";

window.onload = function () {
    // ITEMS
    const teams = document.querySelectorAll('.teams__icon');
    const ps = document.getElementById('ps');
    const ai = document.getElementById('ai');
    const cs = document.getElementById('cs');
    const teamsList = document.getElementById('teams__list');
    const teamsTitle = document.getElementById('teams__title');
    const notifyList = document.getElementById('notifiy__list');
    const categoriesList = document.getElementById('messaging__list');
    const chatList = document.getElementById('chat__list');
    const chatGroupName = document.getElementById('chat__group-name')

    // LODAERS
    const loader = document.getElementById('loader');
    const chatLoader = document.getElementById('chat-loader');

    const chatMessageList = document.getElementById('chat__messages-list');
    const chatInput = document.getElementById('chat-input');

    loader.style.display = 'none';
    chatLoader.style.display = 'none';

    // HTML GENERATED FUNCTIONS
    function basicListItemShow(data, element) {
        for (const item of data) {
            const html = `
        <li class="notify__item ${item.isStrong ? 'new-message' : ''}">
            ${item.svg}
            <span class="notify__text">${item.isStrong ? `<strong>${item.item}</strong>` : `${item.item}`}</span>
        </li>`;

            element.insertAdjacentHTML('beforeend', html);
        }
    }

    function categoriesListShow(data, element) {
        for (const [key, item] of Object.entries(data)) {
            const nestedListItems = item.categoryList;
            let listItems;
            if (item?.isUser) {
                listItems = nestedListItems.map(item => {
                    return `<li class="message__item">
                            <p class="message__user">
                                <span class="user__active"></span>
                                <span>${item.name}</span>
                            </p>
                        </li>`
                }).reduce((acc, item) => {
                    return acc + item;
                }, '');
            } else {
                listItems = nestedListItems.map(
                    item => {
                        return `<li class="${item.name} message__item ${item.count ? 'new-message' : ''} ${item.listActive ? 'active' : ''}">
                        <span id="${item.name}"># ${item.name}</span>
                        ${item.count ? `<span class="message__count">${item.count}</span>` : ''}
                    </li>`
                    }
                ).reduce((acc, item) => {
                    return acc + item;
                }, '');
            }
            const html = `
        <li class="messaging-list">
            <input class="message__checkbox" type="checkbox" name="messaging" id="${item.categoryTitle.toLowerCase()}" ${item.channelActive ? 'checked' : ''}>
            <label for="${item.categoryTitle.toLowerCase()}" class="heading-3">
                <ion-icon class="message__icon" name="caret-down-outline"></ion-icon>
                <span>${item.categoryTitle}</span>
                <ion-icon class="message__add-more" name="add-outline"></ion-icon>
            </label>
            <ul class="message__list">
                ${listItems}
            </ul>
        </li>`;

            element.insertAdjacentHTML('beforeend', html);
        }
    }

    function populateMessages(data) {
        chatList.innerHTML = '';
        for (const item of data) {
            const html = `
        <li class="chat__message-item d-flex">
            <img class="chat__message-photo" src="./Workspaceutils/${item.image}" alt="user image">
            <div class="chat__message-description d-flex">
                <div class="chat__message-user d-flex">
                    <div class="chat__message-name">${item.name}</div>
                    <div class="chat__message-time">${item.time}</div>
                </div>
                <div class="chat__message-body">
                    <p class="chat__message-user-text">${item.message}</p>
                </div>
            </div>
        </li>
        `
            chatList.insertAdjacentHTML('beforeend', html);
        }
    }

    // MAIN FUNCTIONS
    function populateTeamsData(userData) {
        teamsTitle.innerText = userData.title;
        basicListItemShow(userData.basicList, notifyList);
        categoriesListShow(userData.categories, categoriesList);
        populateMessages(userData.categories.channels.categoryList[0].channelConversation);
    }

    // Change data according to teams
    ps.addEventListener('click', () => {
        showCurrentTeamsData(ps, PioneerStudios);
    });

    ai.addEventListener('click', () => {
        showCurrentTeamsData(ai, AstroInnovations);
    });

    cs.addEventListener('click', () => {
        showCurrentTeamsData(cs, CardinalSystems);
    });

    // Populate messages according to channels category (Common for all teams)
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'announcements') {
            showCurrentChannelData('announcements', PioneerStudios, 0);
        }

        if (event.target && event.target.id === 'social-media') {
            showCurrentChannelData('social-media', PioneerStudios, 1);
        }

        if (event.target && event.target.id === 'design-team') {
            showCurrentChannelData('design-team', PioneerStudios, 2);
        }
    });

    // Populate PS Team data on page start or initial load
    populateTeamsData(PioneerStudios);

    // UTILITY FUNCTIONS
    function showCurrentTeamsData(element, data) {
        removeTeamsActive();
        element.classList.add('active');
        showLoader();
        notifyList.innerHTML = '';
        categoriesList.innerHTML = '';
        chatList.innerHTML = '';
        chatGroupName.innerText = `#`
        setTimeout(() => {
            populateTeamsData(data);
            chatGroupName.innerText = `# ${data.categories.channels.categoryList[0].name}`
            populateMessages(data.categories.channels.categoryList[0].channelConversation);
        }, 1000);
    }

    function showCurrentChannelData(id, data, i) {
        showChatLoader();
        removeItemActive();
        document.querySelector(`.${id}`).classList.add('active');
        chatGroupName.innerText = `# ${data.categories.channels.categoryList[i].name}`
        populateMessages(data.categories.channels.categoryList[i].channelConversation);
    }

    // Remove current item state
    function removeItemActive() {
        const itemActiveRemove = document.querySelectorAll('.message__item');
        itemActiveRemove.forEach(item => {
            item.classList.remove('active');
        })
    }

    // Remove current team state
    function removeTeamsActive() {
        teams.forEach(item => {
            item.classList.remove('active');
        });
    }

    // Teams loader animation
    function showLoader() {
        loader.style.display = 'flex';
        loader.classList.add('active');
        setTimeout(() => {
            loader.classList.remove('active');
            loader.style.display = 'none';
        }, 1000);
    }

    // Chat loader animation
    function showChatLoader() {
        chatMessageList.style.display = 'none';
        chatInput.style.display = 'none';
        chatLoader.style.display = 'initial';
        chatLoader.classList.add('active');
        setTimeout(() => {
            chatMessageList.style.display = 'block';
            chatInput.style.display = 'flex';
            chatLoader.classList.remove('active');
            chatLoader.style.display = 'none';
        }, 1000);
    }

}



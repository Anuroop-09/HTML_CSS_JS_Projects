class MainView {
    _data;
    _mainContent = document.getElementById("content");

    /**
     * This method is used to handle the users data rendering
     * @param {Function} handler 
     */
    addHandlerUsers(handler) {
        handler();
    }

    /**
     * This method is used to handle the MFA code generation
     * @param {Function} handler 
     */
    addHandlerMFACode(handler) {
        const users = document.querySelectorAll(".mfa__item");
        users.forEach(item => {
            item.addEventListener('click', (e) => {
                const generateBtn = e.target.closest(".mfa__button");
                if (!generateBtn) return;
                handler(generateBtn);
            });
        });
    }

    /**
     * This method is used to render the users data
     * @param {Object} data 
     */
    render(data) {
        this._data = data;
        const markUp = this._generateMarkUpSections();
        this._mainContent.insertAdjacentHTML('beforeend', markUp);
    }

    /**
     * This method is used to update the MFA code display
     * @param {Element} mfaBtn 
     * @param {String} newCode 
     */
    updateMfaDisaplay(mfaBtn, newCode) {
        const parentMfaItem = mfaBtn.closest(".mfa__item");
        const mfaCode = parentMfaItem.querySelector(".mfa__code");
        mfaCode.innerText = newCode;
        mfaCode.style.color = (newCode === "Expired") ? "#f03e3e" : "#333";
    }

    /**
     * This method is used to update the timer and progress circle
     * @param {Element} mfaBtn 
     * @param {String} timeLeft 
     */
    updateTimer(mfaBtn, timeLeft) {
        const parentMfaItem = mfaBtn.closest(".mfa__item");
        const mfaCountDown = parentMfaItem.querySelector(".mfa__timer .mfa__seconds");
        const mfaProgressCircle = parentMfaItem.querySelector(".mfa__circle-progress");
        const radius = 15;
        const circumference = 2 * Math.PI * radius; // 94.25
        const progress = timeLeft / 30;
        const offset = circumference * (1 - progress);
        mfaProgressCircle.style.strokeDasharray = circumference;
        mfaProgressCircle.style.strokeDashoffset = offset;
        mfaCountDown.innerText = `${timeLeft}`;
    }

    /**
     * This method is used to disable/enable the button
     * @param {Element} mfaBtn 
     * @param {Boolean} state 
     */
    toggleButtonState(mfaBtn, state) {
        mfaBtn.disabled = state;
    }

    /**
     * This method is used to generate the HTML markup of all sections
     * @returns
     */
    _generateMarkUpSections() {
        const sections = [];
        const sectionData = this._data;
        for (const key of Object.keys(sectionData)) {
            const html = `
                <section class="mfa" id="${sectionData[key]?.sectionId}">
                    <h2 class="mfa__heading">${sectionData[key]?.sectionTitle}</h2>
                    <ul class="mfa__list">
                        ${this._generaterMarkUpUsers(sectionData[key]?.listOfUsers)}
                    </ul>
                </section>`;
            sections.push(html);
        }
        return sections.join("");
    }

    /**
     * This method is used to generate the HTML markup of users list
     * @param {Array} users 
     * @returns 
     */
    _generaterMarkUpUsers(users) {
        const userItems = [];
        for (const { userId, label } of users) {
            const html = `
                <li class="mfa__item">
                    <p class="mfa__user">${label}</p>
                    <button class="mfa__button" id="${userId}">Generate</button>
                    <p class="mfa__code">000000</p>
                    <div class="mfa__timer">
                        <svg class="mfa__svg">
                            <circle class="mfa__circle mfa__circle-base" cx="20" cy="20" r="15"></circle>
                            <circle class="mfa__circle mfa__circle-progress" cx="20" cy="20" r="15"></circle>
                        </svg>
                        <p class="mfa__seconds">30</p>
                    </div>
                </li>`;
            userItems.push(html);
        }
        return userItems.join("");
    }

}

export default new MainView();
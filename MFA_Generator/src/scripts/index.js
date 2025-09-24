import data from "./data.js";

// LOCATORS
const mainContent = document.getElementById("content");

const generaterMarkUpUsers = function (users) {
    let userItems = [];
    for (const { userId, label } of users) {
        const html = `<li class="mfa__item">
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
        </li>`
        userItems.push(html)
    }
    return userItems.join("");
}

const generateMarkUpSections = function () {
    let sections = [];

    for (const key of Object.keys(data)) {
        const html = `
        <section class="mfa" id="${data[key]?.sectionId}">
            <h2 class="mfa__heading">${data[key]?.sectionTitle}</h2>
            <ul class="mfa__list">
                ${generaterMarkUpUsers(data[key]?.listOfUsers)}
            </ul>
        </section>`;
        sections.push(html);
    }
    return sections.join("");
}

mainContent.insertAdjacentHTML('beforeend', generateMarkUpSections());



const users = document.querySelectorAll(".mfa__item");

const getMFACode = function(userData) {
    const totp = new OTPAuth.TOTP({
        issuer: 'vidalung',
        label: userData.label,
        algorithm: 'SHA1',
        digits: 6,
        period: 30,
        secret: userData.secretKey,
    });
    const otpCode = totp.generate();
    return otpCode;
}

const getCodeAndStartTimer = function(mfaBtn, userData) {
    let timeout = 30;
    const radius = 15;
    const circumference = 2 * Math.PI * radius;
    // Get parent element of targetted button
    const parentMfaItem = mfaBtn.closest(".mfa__item");
    // Get the seconds element
    const mfaCode = parentMfaItem.querySelector(".mfa__code");
    // Get the seconds element
    const mfaCountDown = parentMfaItem.querySelector(".mfa__timer .mfa__seconds");
    // Get the progress element
    const mfaProgressCircle = parentMfaItem.querySelector(".mfa__circle-progress");

    // Set the default state of progress
    mfaProgressCircle.style.strokeDasharray = circumference;
    mfaProgressCircle.style.strokeDashoffset = 0;

    // Set code
    mfaCode.innerText = getMFACode(userData);
    mfaCode.style.color = "#333";
    mfaBtn.disabled = true;

    const timer = setInterval(() => {
        if (timeout > 0) {
            timeout -= 1;
            const progress = timeout / 30;
            const offset = circumference * (1 - progress);
            // Set the progress circumference
            mfaProgressCircle.style.strokeDashoffset = offset;
            mfaCountDown.innerText = `${timeout}`;
            // make button to not interact until timer finishes
        } else {
            mfaCode.innerText = "Expired";
            mfaCode.style.color = "#f03e3e";
            // Set back the progress state to default
            mfaProgressCircle.style.strokeDashoffset = 0;
            // Set back the count down back to 30 seconds
            mfaCountDown.innerText = '30';
            // Stop timer once the code time is expired
            clearInterval(timer);
            // Set back button to normal
            mfaBtn.disabled = false;
        }
    }, 1000);
}

users.forEach(item => {
    item.addEventListener('click', (e) => {
        const generateBtn = e.target.closest(".mfa__button");
        if (!generateBtn) return;
        const userId = generateBtn.id;
        const sectionId = generateBtn.closest(".mfa").id;
        const sectionData = data[Object.keys(data).filter(item => (data[item]?.sectionId == sectionId))];
        const [userData] = sectionData?.listOfUsers.filter(item => item.userId == userId);
        getCodeAndStartTimer(generateBtn, userData);
    });
});


import * as model from "../model/model.js";
import view from "../views/mainView.js";
import popupView from "../views/popupView.js";

const GLOBAL_TIMER = 30;

const controlUsers = function () {
    // Get users data
    const userData = model.data;
    // Render user data
    view.render(userData);
}

const controlMFACode = function (mfaGenerateBtn) {
    const data = model.data;
    // Get the user id
    const userId = mfaGenerateBtn.id;
    // Get the environment
    const sectionId = mfaGenerateBtn.closest(".mfa").id;
    // Find the section data by filtering "data" using section id of above
    const sectionData = data[Object.keys(data).filter(item => (data[item]?.sectionId == sectionId))];
    // Filter the user data using the above filtered desired section data
    const [userData] = sectionData?.listOfUsers.filter(item => item.userId == userId);
    // Generate New MFA Code of the user
    const mfaCode = model.getMFACode(userData);
    // Update the display of the code for the respective role
    view.updateMfaDisaplay(mfaGenerateBtn, mfaCode);
    // Start timer
    startTimer(mfaGenerateBtn);
}

const controlTempCodeGen = function (userData) {
    // Get Temp Code Generation User details and Generate code
    const mfaCode = model.getMFACode(userData);
    // Update the display of the code
    popupView.updateMfaTempCodeDisplay(mfaCode);
    // Start timer
    startTimerTempCode();
}

const controlTempCodePopup = function () {
    popupView.clearIntervals(model.state.intervals);
    popupView.toggleTempCodeGenBtnState(false);
    popupView.clearForm();
    popupView.updateMfaTempCodeDisplay("000000");
    popupView.updateTempCodeTimer(30);
}

const startTimer = function (mfaBtn) {
    let timeout = GLOBAL_TIMER;
    // Disable the button
    view.toggleButtonState(mfaBtn, true);
    const timeInterval = setInterval(() => {
        if (timeout > 0) {
            timeout -= 1;
            // Update timer
            view.updateTimer(mfaBtn, timeout);
        } else {
            // Clear the code once the timer completes
            view.updateMfaDisaplay(mfaBtn, "Expired");
            // Reset the timer
            view.updateTimer(mfaBtn, 30);
            // Reactivate the button
            view.toggleButtonState(mfaBtn, false);
            clearInterval(timeInterval);
        }
    }, 1000);
}

const startTimerTempCode = function () {
    let timeout = GLOBAL_TIMER;
    // Disable the button
    popupView.toggleTempCodeGenBtnState(true);
    const timeInterval = setInterval(() => {
        if (timeout > 0) {
            timeout -= 1
            // Update timer
            popupView.updateTempCodeTimer(timeout);
        } else {
            // Clear the code once the timer completes
            popupView.updateMfaTempCodeDisplay("Expired");
            // Reset the timer
            popupView.updateTempCodeTimer(30);
            // Reactivate the button
            popupView.toggleTempCodeGenBtnState(false);
            clearInterval(timeInterval);
        }
    }, 1000);
    model.state.intervals.push(timeInterval);
}

export const init = function () {
    view.addHandlerUsers(controlUsers);
    view.addHandlerMFACode(controlMFACode);
    popupView.addHandlerPopup(controlTempCodePopup);
    popupView.addHandlerTempCodeGeneration(controlTempCodeGen);
}
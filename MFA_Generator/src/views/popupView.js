class PopupView {

    _tempCodeForm = document.getElementById("tempCodeGenForm");

    /**
     * This method is used to handle the popup open/close and form submission
     */
    addHandlerPopup(handler) {
        const tempBtn = document.getElementById("tempCodeGenBtn");
        const popupCloseIcon = document.getElementById("popupIconClose");
        tempBtn.addEventListener('click', () => {
            this._toggleTempCodeGenPopup();
        });
        
        popupCloseIcon.addEventListener('click', () => {
            handler();
            this._toggleTempCodeGenPopup();
        });
    }

    /**
     * This method is used to handle the temp code generation form submission
     * @param {Function} handler 
     */
    addHandlerTempCodeGeneration(handler) {
        this._tempCodeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formEle = e.target;
            const labelValue = (formEle.elements["label"].value).trim();
            const secretValue = (formEle.elements["secret"].value).trim();
            if (labelValue === "" || secretValue === "") {
                alert("Label / Secret must not be empty");
            } else {
                const userData = { label: labelValue, secretKey: secretValue }
                handler(userData);
            }
        })
    }

    /**
     * This method is used to toggle the popup display
     */
    _toggleTempCodeGenPopup() {
        const tempCodePopup = document.getElementById("tempCodePopup");
        tempCodePopup.classList.toggle("popup--show");
    }

    /**
     * This method is used to clear the intervals
     * @param {Array} intervals 
     */
    clearIntervals(intervals) {
        if (Array.isArray(intervals) && intervals.length > 0) {
            intervals.forEach(interval => clearInterval(interval));
        }
    }

    /**
     * This method is used to clear the form inputs
     */
    clearForm() {
        const label = this._tempCodeForm.querySelector("#label");
        const secret = this._tempCodeForm.querySelector("#secret");
        label.value = secret.value = "";
    }

    /**
     * This method is used to toggle the temp code generation button state
     * @param {Boolean} state 
     */
    toggleTempCodeGenBtnState(state) {
        const formBtn = this._tempCodeForm.querySelector("button");
        formBtn.disabled = state;
    }

    /**
     * This method is used to update the temp MFA code display
     * @param {String} tempCode 
     */
    updateMfaTempCodeDisplay(tempCode) {
        const tempMfaCodeEle = document.getElementById("tempMfaCode");
        tempMfaCodeEle.innerText = tempCode;
        tempMfaCodeEle.style.color = (tempCode === "Expired") ? "#f03e3e" : "#333";
    }

    /**
     * This method is used to update the temp code timer
     * @param {Integer} timeLeft 
     */
    updateTempCodeTimer(timeLeft) {
        const timer = this._tempCodeForm.querySelector(".temp-form__timer span");
        timer.innerText = `${timeLeft}`;
    }

}

export default new PopupView();

import { sectionTemplates as templates, statusOptions } from "./dataOptions.js";

window.addEventListener('DOMContentLoaded', () => {

    const formList = document.getElementById("form__list");
    const addNewBtn = document.getElementById("btn__add");
    const resetBtn = document.getElementById("btn__reset");
    const copyBtn = document.getElementById("btn__copy");
    const generateBtn = document.getElementById("btn__generate");
    const showStatusSummary = document.getElementById("section__summary");
    const copyAlert = document.querySelector(".section__copy");


    const generateDefaultListRow = function (inputTemplate) {
        const htmlMarkUp = `<li class="form__item">
                            <select class="form__select" name="selection">
                                <option value="default" selected disabled hidden>Select Action Type</option>
                                <option value="story-review">Story Review</option>
                                <option value="mind-maps">Mind Maps</option>
                                <option value="test-cases">Test Cases</option>
                                <option value="execution">Execution</option>
                                <option value="defect-raised">Defect Raised</option>
                                <option value="regression">Regression</option>
                                <option value="workflows">Workflows</option>
                                <option value="automation">Automation</option>
                                <option value="hot-fix">Hot-Fix</option>
                                <option value="mini-update">Mini-Update</option>
                                <option value="dev-connect">DEV Team Connect</option>
                            </select>
                            ${templates[inputTemplate]}
                            <button class="btn btn__delete">
                                <svg>
                                    <use xlink:href="public/svgs/sprite.svg#icon-highlight_remove"></use>
                                </svg>
                            </button>
                        </li>`;
        formList.insertAdjacentHTML('beforeend', htmlMarkUp);
    }


    // HANDLE DROPDOWN SELECTION
    formList.addEventListener('change', (e) => {
        const select = e.target.closest('.form__select');
        if (!select) return;

        const selectedValue = select.value;
        const formItem = select.closest('.form__item');
        const section = formItem.querySelector('.form__section');
        section.remove();
        select.insertAdjacentHTML('afterend', templates[selectedValue]);
    });


    // ADD NEW STATUS ROW
    addNewBtn.addEventListener('click', () => {
        
        // FILTER OPTIONS TO AVOID DUPLICATES
        const optionsAvailable = statusOptions;
        const optionsSelected = [];
        const formListItems = document.querySelectorAll(".form__item");
        formListItems.forEach(item => {
            const drpDwn = item.querySelector('.form__select');
            optionsSelected.push((drpDwn.value).trim())
        });
        
        // BLOCK IF 'DEFAULT' IS PRESENT
        if (optionsSelected.includes("default")) {
            alert("Please update or remove the 'Default' status item before adding a new item.");
            return;
        }; 

        const optionsToHave = optionsAvailable.filter(option =>
            !optionsSelected.includes(option.value)
        );

        // GENERATE HTML MARKUP
        const htmlMarkUp = `<li class="form__item">
                            <select class="form__select" name="selection">
                                <option value="default" selected disabled hidden>Select Action Type</option>
                                ${optionsToHave.map(option => `<option value="${option.value}">${option.text}</option>`).join('')}
                            </select>
                            ${templates['default']}
                            <button class="btn btn__delete">
                                <svg>
                                    <use xlink:href="public/svgs/sprite.svg#icon-highlight_remove"></use>
                                </svg>
                            </button>
                        </li>`;
        formList.insertAdjacentHTML('beforeend', htmlMarkUp);
    });


    // HANDLE DELETE
    formList.addEventListener('click', (e) => {
        const deleteBtn = e.target.closest('.btn__delete');
        if (!deleteBtn) return;
        deleteBtn.closest('.form__item').remove();
    });


    // HANDLE RESET
    resetBtn.addEventListener('click', () => {
        formList.innerHTML = '';
        generateDefaultListRow('default');
        showStatusSummary.value = "";
    });


    // HANDLE COPY
    copyBtn.addEventListener('click', () => {
        copyAlert.classList.add('section__copy--active');
        navigator.clipboard.writeText(showStatusSummary.value);
        setTimeout(() => {
            copyAlert.classList.remove('section__copy--active');
        }, 1000)
    });


    // HANDLE STATUS GENERATION
    generateBtn.addEventListener('click', () => {

        const statusObject = [];
        const statusSummaryArr = [];
        showStatusSummary.value = "";
        
        const formListItems = document.querySelectorAll(".form__item");
        // BLOCK IF THERE ARE NO ITEMS
        if (formListItems.length == 0) {
            alert("Add Status items to generate the Status summary");
            generateDefaultListRow('default');
            return;
        }

        formListItems.forEach(item => {
            const formValues = {};
            // GET DROPDOWN VALUE
            const drpDwn = item.querySelector(".form__select");
            formValues.selection = drpDwn.value;

            // GET RADIO BUTTON SELECTION
            const radioBtn = item.querySelector("input[type='radio']:checked");
            formValues.radioVal = radioBtn ? radioBtn.nextElementSibling.textContent.trim() : null;

            // GET INPUT TEXT VALUE
            const textInput = item.querySelector("input[type='text']");
            formValues.inputVal = textInput ? textInput.value : ""

            // ADD ITEM TO MAIN ITEMS ARRAY
            statusObject.push(formValues);
        });

        // CHECKING FOR ANY INVALID 'DEFAULT' SELECTIONS
        const invalidStatusSummary = statusObject.find(item => item.selection === "default");
        if (invalidStatusSummary) {
            alert("'Default' status item is present. Please remove the item or update the item");
            return;
        };

        // GENERATE STATUS SUMMARY
        statusObject.forEach(statusItem => {
            const {selection, radioVal, inputVal} = statusItem;
            switch (selection) {
                case "story-review":
                    if (radioVal) statusSummaryArr.push(`${radioVal} reviewing ${inputVal} stories.`);
                    break;
                case "mind-maps":
                    if (radioVal) statusSummaryArr.push(`${radioVal} working on Minds-maps for ${inputVal} stories.`);
                    break;
                case "test-cases":
                    if (radioVal) statusSummaryArr.push(`${radioVal} Test cases for ${inputVal} stories.`);
                    break;
                case "execution":
                    if (radioVal) statusSummaryArr.push(`Worked on ${inputVal} stories on ${radioVal.toUpperCase()} environment.`);
                    break;
                case "defect-raised":
                    statusSummaryArr.push(`Identified issues on STAGE environment, Raised ${inputVal} defects.`);
                    break;
                case "regression":
                    statusSummaryArr.push(`Worked on Regression Test cases of ${inputVal} stories on STAGE environment.`);
                    break;
                case "workflows":
                    statusSummaryArr.push(`Worked on Workflow Test cases of ${inputVal} stories on STAGE environment.`);
                    break;
                case "automation":
                    if (radioVal) statusSummaryArr.push(`${radioVal} working on automating ${inputVal} Test cases.`);
                    break;
                case "hot-fix":
                    statusSummaryArr.push(`Worked on ${inputVal} Hot-fix stories on STAGE environment.`);
                    break;
                case "mini-update":
                    statusSummaryArr.push(`Worked on ${inputVal} Mini-Update stories on STAGE environment.`);
                    break;
                case "dev-connect":
                    statusSummaryArr.push(`Connected with DEV Team to discuss ${inputVal} clarifications/issues.`);
                    break;
                default: throw Error("Invalid Status Item");
            }
        });
        statusSummaryArr.push(`Attended Scrum call and discussed queries with the Team.`);

        // SHOW STATUS SUMMARY
        statusSummaryArr.forEach((statusLine, i, items) => {
            showStatusSummary.value += `${i + 1}. ${statusLine}${items.length - 1 === i ? '' : '\n'}`;
        });
    });
})
const mindMapInput = document.getElementById('mind-maps');
const testCasesInput = document.getElementById('test-cases');
const devInput = document.getElementById('dev-execution');
const stageInput = document.getElementById('stage-execution');
const ticketRaisedInput = document.getElementById('defects');
const automationInput = document.getElementById('automation');
const devTeamInput = document.getElementById('dev-team');
const hotfixInput = document.getElementById('hotfix');
const regressionInput = document.getElementById('regression');
const showResultBlock = document.getElementById('show-output__items');
const generateBtn = document.getElementById('generate');
const resetBtn = document.getElementById('reset');
const copyBtn = document.getElementById('copy');
const copyAlert = document.querySelector('.copy-alert');

generateBtn.addEventListener('click', function (event) {
    event.preventDefault();
    showResultBlock.value = '';
    const result = [];
    if (mindMapInput.value != "") {
        result.push(`Created Mind Maps for PORT-${mindMapInput.value} Ticket(s)`);
    }
    if (testCasesInput.value != "") {
        result.push(`Created/Edited Test Cases for PORT-${testCasesInput.value} Ticket(s)`);
    }
    if (devInput.value != "") {
        result.push(`Worked on Test Execution of PORT-${devInput.value} Ticket(s) on DEV`);
    }
    if (stageInput.value != "") {
        result.push(`Worked on Test Execution of PORT-${stageInput.value} Ticket(s) on STAGE`);
    }
    if (ticketRaisedInput.value != "") {
        result.push(`Raised PORT-${ticketRaisedInput.value} Ticket(s)`);
    }
    if (automationInput.value != "") {
        result.push(`Worked on Test Automation Script for PORT-T${automationInput.value} Test Case(s)`);
    }
    if (devTeamInput.value != "") {
        result.push(`Connected with DEV Team for PORT-${devTeamInput.value} Ticket(s) Issues/Clarifications`);
    }
    if (hotfixInput.value != "") {
        result.push(`Worked on Hotfix Stories of PORT-${hotfixInput.value} Ticket(s) on STAGE`);
    }
    if (regressionInput.value != "") {
        result.push(`Worked on Regression Test Cases of PORT-${regressionInput.value} on Stage`)
    }
    result.push('Connected with Team for Queries and Discussions');


    for (let i = 0; i < result.length; i++) {
        // const paragraph = document.createElement('p');
        // paragraph.textContent = `${i+1}. ${result[i]}`;
        // showResultBlock.appendChild(paragraph);
        // console.log(`${i+1}. ${result[i]}`);
        showResultBlock.value += `${i + 1}. ${result[i]}\n`;
    }
    console.log(`Status generated and displayed in Result block`);
});

resetBtn.addEventListener('click', () => {
    console.log(`Reset clicked`);
    showResultBlock.value = mindMapInput.value = testCasesInput.value = devInput.value = stageInput.value = devTeamInput.value = ticketRaisedInput.value = automationInput.value = hotfixInput.value = regressionInput.value = "";
});

copyBtn.addEventListener('click', () => {
    showResultBlock.select();
    copyAlert.classList.add('active');
    navigator.clipboard.writeText(showResultBlock.value);
    setTimeout(() => {
        copyAlert.classList.remove('active');
        const selection = document.getSelection();
        if (selection) selection.removeAllRanges();
    }, 1000)
})
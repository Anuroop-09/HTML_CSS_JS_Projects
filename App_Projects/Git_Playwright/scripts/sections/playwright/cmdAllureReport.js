export const cmdAllureReport = {
    sectionTitle: "allure commands",
    listOfCmds: [
        {
            cmdValue: "npm install -D @playwright/test-allure",
            cmdDescription: "Installs allure reporting packages."
        },
        {
            cmdValue: "npx playwright test --reporter=line,allure-playwright",
            cmdDescription: "Runs the tests and create reports which are supported to allure format."
        },
        {
            cmdValue: "npx allure generate ./allure-results --clean",
            cmdDescription: "Creates allure reports based on allures results generated (npx word is optional here, but better to use)."
        },
        {
            cmdValue: "npx allure open ./allure-report",
            cmdDescription: "Opens the generated allure report (npx word is optional here, but better to use)."
        }
    ]
}
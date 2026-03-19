export const cmdPlaywrightCore = {
    sectionTitle: "playwright commands",
    listOfCmds: [
        {
            cmdValue: "npm init playwright@latest",
            cmdDescription: "Installs playwright with latest version."
        },
        {
            cmdValue: "npx playwright --version",
            cmdDescription: "Show the current verison of installed playwright."
        },
        {
            cmdValue: "npm install -D @playwright/test@latest",
            cmdDescription: "Update Playwright with new binaries and their dependencies."
        },
        {
            cmdValue: "npx playwright install --with-deps",
            cmdDescription: "Install updated browsers with new dependencies."
        },
        {
            cmdValue: "npx playwright test",
            cmdDescription: "Runs all the files mentioned in directory in config (\"testDir\") file. Default execution in headless mode."
        },
        {
            cmdValue: "npx playwright test --headed",
            cmdDescription: "Runs all the files mentioned in directory in config (\"testDir\") file in headed mode."
        },
        {
            cmdValue: "npx playwright show-report",
            cmdDescription: "Shows the latest test execution reports in html in https://localhost:9323."
        },
        {
            cmdValue: "npx playwright test ./tests/{file_name.spec.js}",
            cmdDescription: "Runs only the specific test spec file mentioned."
        },
        {
            cmdValue: "npx playwright test ./tests/file_name.spec.js --debug",
            cmdDescription: "Runs only the specific test spec file mentioned in debug mode."
        },
        {
            cmdValue: "npx playwright codegen {url}",
            cmdDescription: "Opens the Playwright Record tool."
        },
        {
            cmdValue: "npx playwright test --ui",
            cmdDescription: "Opens Terminal/Trace-Viewer/UI-Test Runner for execution."
        },
        {
            cmdValue: "npx playwright test --trace on",
            cmdDescription: "Runs the tests and create traces out of it (can be viewed on reports)."
        },
        {
            cmdValue: "npx playwright test --config {config file name}",
            cmdDescription: "Runs all the file(s) with specified configuration file."
        },
        {
            cmdValue: "npx playwright test {file path} --config {config file name}",
            cmdDescription: "Runs the specified file with specified configuration file."
        },
        {
            cmdValue: "npx playwright test --config {config file name} --projects={name}",
            cmdDescription: "Runs the specified file with specified configuration file and project mentioned in configuration file."
        },
        {
            cmdValue: "npx playwright test --grep @tag_name",
            cmdDescription: "Runs only the tests which are marked with the tag name given."
        }
    ]
}
export const cmdCucumberFramework = {
    sectionTitle: "cucumber framework commands",
    listOfCmds: [
        {
            cmdValue: "npm install -D @cucumber/cucumber",
            cmdDescription: "Installs cucumber framework packages."
        },
        {
            cmdValue: "npx cucumber-js",
            cmdDescription: "Runs all feature files and keeps the terminal open after execution (use Ctrl +C to exit)."
        },
        {
            cmdValue: "npx cucumber-js --exit",
            cmdDescription: "Runs all the feature files and closes the terminal smoothly."
        },
        {
            cmdValue: "npx cucumber-js features/{file_name} --exit",
            cmdDescription: "Runs only the specific feature file."
        },
        {
            cmdValue: "npx cucumber-js --tags \"{tag_name}\" --exit",
            cmdDescription: "Runs only the tests which are marked with the tag name given."
        },
        {
            cmdValue: "npx cucumber-js features/{file_name} --parallel {no} --exit",
            cmdDescription: "Runs the scenarios parallelly with the number of scenarios to run from the feature file mentioned."
        },
        {
            cmdValue: "npx cucumber-js --exit --format {type}:cucumber-report.{type}",
            cmdDescription: "Runs all code and generates a report (e.g., HTML, JSON) based on configuration."
        },
        {
            cmdValue: "npx cucumber-js --retry {no} --exit",
            cmdDescription: "Runs the test and if it finds any test failed it will re-execute the test with no of retries specified."
        },
        {
            cmdValue: "npm run {script cmd name}",
            cmdDescription: "Runs the command with the given name which is setup in scripts tag in package.json file."
        },
    ]
}
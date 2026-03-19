export const cmdGettingStarted = {
    sectionTitle: "git | getting started",
    listOfCmds: [
        {
            cmdValue: "git status",
            cmdDescription: "Show modified files in working directory, staged for your next commit."
        },
        {
            cmdValue: "git add [file]",
            cmdDescription: "Add a file to staging."
        },
        {
            cmdValue: "git add *",
            cmdDescription: "Add all the files to staging (can use * or .)."
        },
        {
            cmdValue: "git commit -m [commit message]",
            cmdDescription: "Commit your staged content as a new commit snapshot."
        },
        {
            cmdValue: "git stash",
            cmdDescription: "Remove all current changes, saves to local memory and head back to last commit."
        },
        {
            cmdValue: "git stash pop",
            cmdDescription: "Retrieves/Get back most recent stash chnages."
        }
    ]
}
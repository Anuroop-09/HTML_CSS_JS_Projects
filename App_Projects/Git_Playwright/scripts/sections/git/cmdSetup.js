export const cmdSetup = {
    sectionTitle: "git | setup",
    listOfCmds: [
        {
            cmdValue: "git config --global user.name \"full_name\"",
            cmdDescription: "Set a name that is identifiable for credit when review version history."
        },
        {
            cmdValue: "git config --global user.email \"you@example.com\"",
            cmdDescription: "Set an email address that will be associated with each history marker."
        },
        {
            cmdValue: "git commit --amend --reset-author",
            cmdDescription: "Resetting the author and committer information to the current user."
        }
    ]
}
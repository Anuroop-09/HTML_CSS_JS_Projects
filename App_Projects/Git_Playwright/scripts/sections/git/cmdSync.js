export const cmdSync = {
    sectionTitle: "git | syncing",
    listOfCmds: [
        {
            cmdValue: "git pull",
            cmdDescription: "Fetch and merge any commits from the tracking remote branch."
        },
        {
            cmdValue: "git push [branch name]",
            cmdDescription: "Transmit local branch commits to the remote repository branch."
        },
        {
            cmdValue: "git push -u origin [branch name]",
            cmdDescription: "Creates a new branch on remote repository and pushes the commits to the branch (-u <strong>alias</strong> --set-upstream)."
        },
        {
            cmdValue: "git remote add [name] [url]",
            cmdDescription: "Link your local Git repository to a remote repository (most common for name = origin)."
        },
        {
            cmdValue: "git remote -v",
            cmdDescription: "Lists all remotes associated with your local Git repository."
        },
        {
            cmdValue: "git remote rm origin",
            cmdDescription: "Removes the connection to the remote repository named origin."
        }
    ]
}
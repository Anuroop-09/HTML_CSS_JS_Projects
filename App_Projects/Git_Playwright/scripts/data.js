// COMMANDS DATA
export const commandsData = [
    {
        sectionTitle: "playwright commands",
        listOfCmds: [
            {
                cmdValue: "npm install -D @playwright/test@latest",
                cmdDescription: "Update Playwright with new binaries and their dependencies."
            },
            {
                cmdValue: "npx playwright install --with-deps",
                cmdDescription: "Install updated browsers with new dependencies."
            }
        ]
    },
    {
        sectionTitle: "initialize",
        listOfCmds: [
            {
                cmdValue: "git init",
                cmdDescription: "Initialize an existing directory as a Git repository."
            },
            {
                cmdValue: "git clone [url]",
                cmdDescription: "Retrieve an entire repository from a hosted location via URL."
            }
        ]
    },
    {
        sectionTitle: "setup",
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
    },
    {
        sectionTitle: "getting started",
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
            }
        ]
    },
    {
        sectionTitle: "branching & merging",
        listOfCmds: [
            {
                cmdValue: "git branch",
                cmdDescription: "List of all branches in local."
            },
            {
                cmdValue: "git branch --remote",
                cmdDescription: "List of all remote branches."
            },
            {
                cmdValue: "git branch [branch_name]",
                cmdDescription: "Create a new branch at the current commit."
            },
            {
                cmdValue: "git checkout [branch_name]",
                cmdDescription: "Switch to another branch and check it out into your working directory."
            },
            {
                cmdValue: "git branch -d [branch name]",
                cmdDescription: "Deletes the branch if the branch has already been merged."
            },
            {
                cmdValue: "git branch -D [branch name]",
                cmdDescription: "Deletes the branch If the branch has not been merged (force delete)."
            },
            {
                cmdValue: "git merge [branch name]",
                cmdDescription: "Merge a remote branch into your current branch to bring it up to date."
            }
        ]
    },
    {
        sectionTitle: "syncing",
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
            }
        ]
    },
    {
        sectionTitle: "inspecting",
        listOfCmds: [
            {
                cmdValue: "git log",
                cmdDescription: "Provides detailed log information of current branch."
            },
            {
                cmdValue: "git log --oneline",
                cmdDescription: "Provides current branch logs in one line."
            },
            {
                cmdValue: "git log --oneline --all",
                cmdDescription: "Provide logs for all branches."
            },
        ]
    }
]
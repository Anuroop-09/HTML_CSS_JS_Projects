export const cmdBranchAndMerge = {
    sectionTitle: "git | branching & merging",
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
        },
        {
            cmdValue: "git cherry-pick {commit_hash}",
            cmdDescription: "Applies changes from one or more commits to the current branch as new commits."
        },
        {
            cmdValue: "git cherry-pick {commit_hash} -n",
            cmdDescription: "Applies the changes from the commit but does not create a commit; waits for you to commit manually."
        },
        {
            cmdValue: "git cherry-pick {commit_hash} -e",
            cmdDescription: "Applies the changes and lets you edit the commit message before creating the commit."
        },
        {
            cmdValue: "git reset {commit_hash}",
            cmdDescription: "Resets branch to a specific commit, keeping changes uncommitted (default: --mixed)."
        },
        {
            cmdValue: "git reset --soft {commit_hash}",
            cmdDescription: "Clears the commit history to till the mentioned commit# and changes will be staging."
        },
        {
            cmdValue: "git reset --hard {commit_hash}",
            cmdDescription: "Clears the commit history to till the mentioned commit# and changes will be removed."
        },
        {
            cmdValue: "git revert {commit_hash}",
            cmdDescription: "Reverts a commit by undoing its changes and creating a new commit with a message."
        },
        {
            cmdValue: "git revert {commit_hash} --no-edit",
            cmdDescription: "Reverts and takes the previous commit message."
        }
    ]
}
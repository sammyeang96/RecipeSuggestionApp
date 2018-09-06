<h1>How to Synchronize Local Repo with GitHub</h1>

1. Create a folder in your computer as the location of the local repository
2. Open up Git Bash and cd into above folder
3. In Git Bash, run `git init`
4. Run `git add remote origin https://github.com/sammyeang96/RecipeSuggestionApp.git` *Might not work, If not, go straight to step 5*
5. Run `git clone https://github.com/sammyeang96/RecipeSuggestionApp.git`

<h2>Good Practice</h2>

* Before pushing to the master branch (or doing any work in general that's not on a personal branch), run `git pull` from the master branch to make sure you have the latest code from the master branch
  * To switch branches from personal to master or vice versa, use `git checkout branch_name` when on the appropriate sub or parent folder. Though, Git Bash will tell you which branch you're on in blue and in parenthesis, next to your file path. i.e. <span style="color: yellow;">/Resources/ConnectingToGitHub.md </span><span style="color: aqua;"> (master) </span>

* Before starting work on implementing a new feature, create a branch using `git checkout -b name_of_branch` and merge when the feature is reviewed and complete
  * If pushing to the master branch from any branch, use `git push -u origin master`, otherwise use `git push` to push to the branch you're currently in
  * After pushing use `git merge master` to merge your local branch with the local master
  * Switch to master and push the master branch back up to github.
    * `git push` from your branch
    * `git merge master`
    * `git checkout master`
    * `git commit -m "message"`
    * `git push`

  * To merge the branch, use `git merge master -m "message"`
  * If you want to delete the branch afterwords, run `git branch -d branch_name`

* Make sure to commit and push often so you don't lose changes!



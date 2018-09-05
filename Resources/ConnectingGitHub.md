<h1>How to Synchronize Local Repo with GitHub</h1>

1. Create a folder in your computer as the location of the local repository
2. Open up Git Bash and cd into abovefolder
3. In Git Bash, run `git init`
4. Run `git add remote origin https://github.com/sammyeang96/RecipeSuggestionApp.git` *Might not work, If not, go straight to step 6*
5. Run `git clone https://github.com/sammyeang96/RecipeSuggestionApp.git`

<h2>Good Practice</h2>
* Before starting any work sessions, run `git pull` to make sure you have the latest code
* Before implementing a new feature, create a branch using `git checkout -b *name_of_branch* ` and merge when feature is reviewed and complete
* Make sure to commit often so you don't lose changes!

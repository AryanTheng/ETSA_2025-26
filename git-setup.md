# -----------------------------
# 🔗 Git & GitHub One-Time Setup
# -----------------------------

# 1. Set your Git identity (use the same email as GitHub)
```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```
# 2. Use 'main' as default branch
```bash
git config --global init.defaultBranch main
```
# 3. Enable credential caching
# (Run the line that matches your OS)

# Windows
```bash
git config --global credential.helper manager-core
```
# macOS
```bash
git config --global credential.helper osxkeychain
```
# Linux (temporary cache in memory)
```bash
git config --global credential.helper cache
```
# Linux (permanent storage, plain text - use carefully)
```bash
git config --global credential.helper store
```
# 4. Install GitHub CLI (choose based on your OS)
# Linux (Debian/Ubuntu)
```bash
sudo apt install gh -y
```
# macOS (Homebrew)
```bash
brew install gh
```
# Windows (Winget)
```bash
winget install --id GitHub.cli
```
# 5. Authenticate Git with GitHub
```bash
gh auth login
```
use HTTPS protocol if asked.
# 6. Verify configuration
```bash
git config --global --list
```

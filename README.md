# 🚀 Task 0: Installing Necessary Tools for MERN Stack Development

Welcome to the first step of your MERN stack journey!

In this task, we’ll set up the development environment by installing all the essential tools required to build full-stack applications using the **MERN** stack.

---

## 📚 What is the MERN Stack?

**MERN** is a popular tech stack used for full-stack web development. It includes:

- **M**: MongoDB – NoSQL database
- **E**: Express.js – Backend web framework running on Node.js
- **R**: React.js – Frontend library for building user interfaces
- **N**: Node.js – JavaScript runtime for server-side programming

We'll use this stack to build the **ETSA Website**. Before jumping into coding, we need to prepare our development tools.

---

## 🌐 Web Development: Quick Overview

Every web application has two main parts:

### ✅ Frontend:
- The part users **see and interact with** (UI)
- Built using **HTML, CSS, JavaScript, and React**

### ✅ Backend:
- The part that **processes requests, interacts with databases**, and returns results
- Built using **Node.js, Express.js**, and connected to a database like MongoDB

---

## 🛠 Tools You Need to Install

### ✅ 1. Visual Studio Code (VS Code)
> Hope you already have it. If not, download it from [https://code.visualstudio.com/](https://code.visualstudio.com/)

---

### ✅ 2. Node.js (includes npm – Node Package Manager)
- Install it yourself or follow instructions in the `nodeinstall.md`[nodeinstall.md](./nodeinstall.md) file in this repo.

---

### ✅ 3. Git (Version Control System)
- Install it yourself or follow instructions in the `gitinstall.md`[gitinstall.md](./gitinstall.md) file in this repo.

---

### ✅ 4. Create a GitHub Account
- Go to [https://github.com/](https://github.com/) and create a free account.
- You’ll need this to push code and collaborate.
> 💡 You're officially a developer from this point on!

---

## 🔗 Link Git with GitHub
Folow `git-setup.md`[git-setup.md](./git-setup.md)  file for linking git with GitHub.
Open a terminal and run the following commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
---

## 🧪 Verify Installation (Node, Git, npm)

Now that you've installed Node.js, Git, and configured GitHub, let's verify your setup by running a script that checks and logs the versions.

---

### ✅ Instructions

---

### 📁 Step 1: Fork and Clone the Repository

If you're unsure how to fork and clone, search for a tutorial on YouTube.
Once ready, run the following in your terminal:
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>/task0
```
Replace <your-username> and <repo-name> with your actual GitHub username and the repository name.

---

### ⚙️ Step 2: Run the Verification Script

Add your name in `check-setup.js`.
This script will generate a <your_name>_setup-status.txt file with your system information.
```bash
node check-setup.js
```
✅ It will create a file inside the /output folder like:
```bash
output/aryan_theng_setup-status.txt
```

---

### 🔄 Step 3: Commit and Push Your Results
```bash
git add .
git commit -m "02-09-2025: Aryan Theng (This is just a commit msg — write anything you like)"
git push
```
---

### 📤 Step 4: Create a Pull Request (PR)

- Go to your forked repository on GitHub
- Click "Contribute" → "Open pull request"
- Add a title and description
- Submit the PR

🕐 Once submitted, wait or DM me to get it reviewed and merged faster.

---

### ✅ Step 5: Final Check

After your PR is merged, your file should appear in the `Task0/output`[Task0/output](./Task0/output) folder on the main repository.

## 🎉 You Did It!
```bash
🎉 Congrats! You have successfully completed your environment setup.
🚀 You are no longer a beginner — welcome to real-world development!
```
---

# 🔗 Git & GitHub Setup Guide

This guide will set up Git and connect it with your GitHub account.  
It’s a **one-time setup per machine**.

---

## ⚡ Quick Setup (Copy-Paste in Bash)


# 1. Set your Git identity (use same email as GitHub)
```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```
# 2. Use 'main' as default branch
```bash
git config --global init.defaultBranch main
```
# 3. Enable credential caching
# Windows
```bash
git config --global credential.helper manager-core
```
# macOS
```bash
git config --global credential.helper osxkeychain
```
# Linux (temporary cache)
```bash
git config --global credential.helper cache
```
# Linux (permanent, plain text - careful)
```bash
git config --global credential.helper store
```
# 4. Verify configuration
```bash
git config --global --list
```

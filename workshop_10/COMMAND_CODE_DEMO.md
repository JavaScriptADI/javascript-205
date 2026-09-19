# Workshop 10 — Command Code live demo · run sheet

For the instructor. Students don't run Command Code in class (it has no free plan); they watch, predict, and vote on every diff. Installing it themselves is Homework 9.

Slide numbers refer to `presentations/js-workshop-10.html`.

---

## The day before

1. `node -v` must print **v22 or higher**. Command Code refuses to start on Node 20 and below.
2. Install and check:
   ```bash
   npm i -g command-code@latest
   cmdc --version        # Windows. On macOS / Linux the command is: cmd
   ```
3. `cmdc login`. It opens the browser; click **Authorize**.
4. Start it once, run `/usage` (credits left), and `/model` to pick the model you'll demo with. Use the same one for the dry run and the class.
5. **Dry run the whole script below once** in a throwaway copy, so you've seen how this model phrases things and how many requests it takes.

## Ten minutes before class

Make a **fresh copy** of the buggy page. The copy is what Command Code edits, so the repo keeps the buggy version for the students. The solutions live in `workshop_10/solutions/`, *outside* the copied folder, so the AI can't read the answers.

PowerShell (from the repo root):

```powershell
Remove-Item -Recurse -Force $HOME\Desktop\supra-live -ErrorAction SilentlyContinue
Copy-Item -Recurse workshop_10\supra $HOME\Desktop\supra-live
cd $HOME\Desktop\supra-live
git init -q; git add .; git commit -qm "buggy"     # so `git diff` / `git checkout .` work later
```

bash (macOS / Linux / Git Bash):

```bash
rm -rf ~/Desktop/supra-live && cp -r workshop_10/supra ~/Desktop/supra-live
cd ~/Desktop/supra-live && git init -q && git add . && git commit -qm "buggy"
```

Projector layout: the terminal on the left (font size up: `Ctrl +`), the browser on the right with `supra-live/index.html` open.

---

## The script (slide 10)

### 1 · Start it: `cmdc`

- *Do you trust the files in this folder?* → **Yes, proceed**
- It may offer a demo of how it learns your taste → **No**, for now.

Say: *"It can see this folder, and only this folder."*

### 2 · Give it rules: `/init`

It reads the project and writes `AGENTS.md`. Open it (`/memory`, or in the editor) and read it aloud: *"this is what it remembers about the project, every time."* Then add at the end:

```markdown
## Rules for this project
- Beginners read this code. Explain every change in one short sentence.
- Plain JavaScript only: no libraries, no classes, no new files.
- Fix one bug at a time.
```

### 3 · Plan mode: find, don't touch

Press **Shift+Tab** until the status line says `plan`. In plan mode it can read and search but not edit files. Type:

```text
The Supra order page (index.html + app.js) has bugs. Find every bug in app.js.
For each one: the line number, what the user sees, and why it happens.
Don't change any files yet.
```

### 4 · Humans vs AI: the score

Compare its list with the pairs' lists from slide 9. One point per real bug. **A "bug" it can't show on the page doesn't count.** Ask the class: *"Is that really a bug? How would you check?"*

### 5 · Fix one, review, run

**Shift+Tab** back to `default`. Type:

```text
Fix bug 1 only.
```

When it asks for permission to edit `app.js`:

1. Read the diff out loud (`Ctrl+O` shows the full output).
2. **Class vote: thumbs up or down.** Would you accept this?
3. Choose the **once** option, not *allow and remember*. Remembering turns on auto-accept for file edits, and today we want to see every diff.
4. Refresh the browser and check the symptom is gone.

### 6 · The rest, one at a time

```text
Fix the next bug.
```

Repeat step 5 for every fix. If it bundles several fixes into one diff, **deny with feedback**: `One bug at a time, please.`

### 7 · Undo: `Esc Esc`

Press **Esc twice** (or `/rewind`), pick the checkpoint before the last fix, and refresh the browser: the bug is back. Say: *"Nothing it does is permanent until you keep it."* Then: `Fix that bug again.`

### 8 · The bill: `/usage`

Show what the demo cost. Then `/exit`.

---

## Answer key — the five bugs (slide 11)

| # | `app.js` | What the user sees | Why | Fix |
|---|---|---|---|---|
| 1 | line 37 | Only Khachapuri's **Add** works | `querySelector` stops at the first `.add` | `querySelectorAll(".add").forEach(button => …)` |
| 2 | line 39 | Khachapuri twice → **Total: 01212 ₾** | `dataset` values are strings: `0 + "12" + "12"` | `Number(button.dataset.price)` |
| 3 | line 46 | **Remove** Lobio → only Lobio is left | `filter` keeps what the callback says yes to | `i !== index` |
| 4 | line 56 | **Veggie only** hides every dish, and the 🌱 disappear | `=` puts `"no"` into every dish (and `"no"` is truthy) | `===` |
| 5 | line 70 | **Clear order** does nothing | `clearOrder()` runs once at load and passes `undefined` | `clearOrder`, no parentheses |

The fixed file is `workshop_10/solutions/supra/app.solution.js`, and `workshop_10/solutions/supra/index.html` runs it.

## When the AI surprises you

- **It fixes more than you asked** → deny with feedback. That's the lesson: *you* decide what changes.
- **A different but correct fix** (`parseInt(…)`, `+button.dataset.price`, event delegation, …) → ask the class: is it right? Does it use things we haven't learned yet? `AGENTS.md` said plain JavaScript for beginners.
- **It misses a bug** → the humans win that point. Nudge it: `Look again at the Clear button.`
- **It reports a bug that isn't one** → run the page and check. A claim isn't proof.
- **It edits and says "fixed"** before you've refreshed → that's slide 12's lesson.

## If there's no internet (or no credits)

Skip steps 1–8. Go through slide 11 and make the five fixes by hand in `supra-live/app.js`, refreshing the page after each one. The deck's embedded pages (slides 6 and 21) work offline.

## Reset (for the next group)

```bash
cd ~/Desktop/supra-live && git checkout . && git clean -fd    # also removes AGENTS.md and any .commandcode/ folder
```

Or delete the folder and make a fresh copy (see *Ten minutes before class*).

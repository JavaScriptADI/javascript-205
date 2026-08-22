# Workshop 1 — Homework

Welcome to your first homework! It has three parts:

1. [Part 1 — Research: Git & GitHub](#part-1--research-git--github)
2. [Part 2 — Put your homework on GitHub](#part-2--put-your-homework-on-github)
3. [Part 3 — JavaScript Exercises](#part-3--javascript-exercises)

**Deadline:** before Workshop 2.

**How to submit:** push everything to a GitHub repository (see Part 2) and send the repository link to your instructor.

---

## Part 1 — Research: Git & GitHub

Create a file called `answers.md` and answer the following questions **in your own words**. 1–3 sentences for each question is enough.

Use the links at the bottom if you get stuck.

### What is Git?

1. What is **Git** and what problem does it solve?
2. What is a **version control system (VCS)**?
3. What is a **repository (repo)**?
4. What is a **commit**? Why do we write a **commit message**?
5. What is the difference between `git add` and `git commit`?
6. What does `git push` do? What does `git pull` do?
7. What is a **branch** and why is it useful?

### What is GitHub?

8. What is **GitHub** and how is it different from **Git**?
9. Name two alternatives to GitHub.
10. What is the difference between a **public** and a **private** repository?
11. What is a `README.md` file and what is it used for?
12. What is a `.gitignore` file and why would you not want to commit every file?

> Tip: Answer honestly based on what you understand. It is completely fine to be wrong — we will review the answers together in the next workshop.

---

## Part 2 — Put your homework on GitHub

Follow these steps. If a command fails, read the error message carefully — it usually tells you what is wrong.

### 1. Install the tools

Install **Git** and **Node.js** on your computer.

Create a free **GitHub account** if you don't have one already.

Check that Git is installed by running:

```bash
git --version
```

You should see something like:

```text
git version 2.43.0
```

Check that Node.js is installed:

```bash
node --version
```

You should see something like:

```text
v22.0.0
```

### 2. Tell Git who you are

You only need to do this once per computer:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 3. Create a repository on GitHub

1. Click the **+** in the top-right corner of GitHub → **New repository**.
2. Name it `javascript-homework` (or anything you like).
3. Keep it **Public**.
4. Check **Add a README file**.
5. Click **Create repository**.

### 4. Get the repository onto your computer

Copy the repository URL using the green **Code** button and run:

```bash
git clone https://github.com/your-username/javascript-homework.git
cd javascript-homework
```

### 5. Add your homework files

Put your `answers.md` from Part 1 and all your JavaScript files from Part 3 inside this folder.

Your repository should look something like:

```text
javascript-homework/
│
├── README.md
├── answers.md
├── exercise_1.js
├── exercise_2.js
├── exercise_3.js
├── exercise_4.js
└── exercise_5.js
```

### 6. Commit and push

Run:

```bash
git add .
git commit -m "Add workshop 1 homework"
git push
```

Refresh your repository page on GitHub — your files should be there. 🎉

> If you get stuck, take a screenshot of the error and bring it to the next workshop.

---

## Part 3 — JavaScript Exercises

Create the files below and write JavaScript code to solve each task.

Use only what we covered in Workshop 1:

* Variables
* Data types
* Type casting / type conversion
* Arithmetic operators
* Comparison operators

Run each file with:

```bash
node exercise_1.js
```

---

### `exercise_1.js` — About Me

Create variables for your:

* `name` — string
* `age` — number
* `height` — number, in meters

Print a sentence using **template literals**.

For example:

```javascript
const name = "Nino";
const age = 21;
const height = 1.65;

console.log(`My name is ${name}, I am ${age} years old and ${height} meters tall.`);
```

Expected output:

```text
My name is Nino, I am 21 years old and 1.65 meters tall.
```

---

### `exercise_2.js` — Fix the Bug

The code below doesn't work as expected.

Explain in a comment **why** it doesn't work, then fix it using **type conversion** so that it prints `30`.

```javascript
const a = 10;
const b = "20";

console.log(a + b);
```

Your program should output:

```text
30
```

> Hint: `"20"` is a string, while `10` is a number.

---

### `exercise_3.js` — Rectangle

Create two variables:

```javascript
const width = ...;
const height = ...;
```

Choose any numbers you want.

Calculate and print:

* The **area**: `width * height`
* The **perimeter**: `2 * (width + height)`

For example:

```javascript
const width = 5;
const height = 3;

console.log("Area:", width * height);
console.log("Perimeter:", 2 * (width + height));
```

Expected output:

```text
Area: 15
Perimeter: 16
```

---

### `exercise_4.js` — Odd or Even

Create a variable called `number`.

Use the **modulus operator (`%`)** and a **comparison operator** to determine whether the number is even.

The result should be a boolean:

```javascript
const number = 7;

console.log("Is even:", number % 2 === 0);
```

Expected output:

```text
Is even: false
```

Try changing `number` to different values and see what happens.

---

### `exercise_5.js` — Seconds in a Day

There are:

* 60 seconds in a minute
* 60 minutes in an hour
* 24 hours in a day
* 7 days in a week

Using variables and multiplication, calculate and print:

1. How many seconds are in one day.
2. How many seconds are in one week.

For example:

```javascript
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInWeek = 7;

const secondsInDay = secondsInMinute * minutesInHour * hoursInDay;
const secondsInWeek = secondsInDay * daysInWeek;

console.log("Seconds in a day:", secondsInDay);
console.log("Seconds in a week:", secondsInWeek);
```

---

## Checklist Before You Submit

* [ ] `answers.md` with the Git / GitHub questions answered
* [ ] `exercise_1.js` … `exercise_5.js` written and runnable
* [ ] All exercises use only the concepts covered in Workshop 1
* [ ] Everything is pushed to your GitHub repository
* [ ] Repository link sent to the instructor

---

## Helpful Links

* Git handbook
* GitHub "Hello World" guide
* Git cheat sheet
* Interactive Git practice
* Node.js documentation
* JavaScript documentation on MDN

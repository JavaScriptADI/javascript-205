# Workshop 2 — Homework

Welcome to your second homework! This time, we’ll continue working with JavaScript and introduce a few more important concepts:

1. [Part 1 — Research: Workshop 2 concepts](#part-1--research-workshop-2-concepts)
2. [Part 2 — JavaScript exercises](#part-2--javascript-exercises)

**Deadline:** before Workshop 3.

**How to submit:** push everything to the **same GitHub repository** you created for Homework 1, then re-send the repository link to your instructor.

Put this homework in its own folder so it does not mix with Homework 1:

```bash
cd javascript-homework
mkdir workshop_2_homework
cd workshop_2_homework
# ...create your answers.md and exercise files here...
```

When you are done, commit and push from the repository folder:

```bash
git add .
git commit -m "Add workshop 2 homework"
git push
```

> If a command fails, read the error message carefully — it usually tells you what is wrong. If you are still stuck, take a screenshot and bring it to the next workshop.

---

# Part 1 — Research: Workshop 2 concepts

Create a file called `answers.md` and answer the following questions **in your own words**.

You don't need long answers — **1–3 sentences per question** is enough. It is completely fine to be wrong; we will review the answers together in the next workshop.

## Getting input from the user

1. What does `prompt()` do in JavaScript? What data type does it return?
2. If the user types `42` into `prompt()`, is the result the number `42` or the string `"42"`? Why?
3. Why would we use `Number()` or `parseInt()` / `parseFloat()` after getting input from `prompt()`?
4. What does `typeof` tell you? Give an example of when it could be useful for debugging.

## Working with strings

5. What do the string methods `.toUpperCase()`, `.toLowerCase()`, and `.trim()` do? Give a short example of one of them.
6. What do the escape sequences `\n` and `\t` mean inside a string?
7. What is the difference between a string and a number in JavaScript? Why is `"10" + 5` different from `10 + 5`?

## Booleans and comparisons

8. A comparison like `age >= 18` produces a value. What data type is that value?
9. What are the two possible values of the Boolean data type?
10. What is the difference between `==` and `===`?
11. Why is `===` generally preferred over `==` in JavaScript?
12. What is the difference between `!=` and `!==`?

## Logical operators

13. What do the logical operators `&&`, `||`, and `!` mean?
14. What is the result of `true && false`? What about `true || false`?
15. What does `!true` produce?
16. Give one real-life example where you could use `&&` and one where you could use `||`.

## Numbers and constants

17. Why can `0.1 + 0.2 === 0.3` produce `false` in JavaScript?
18. What is `Math.round()` useful for?
19. What is the difference between `const` and `let`?
20. Some programmers write names like `MAX_SCORE` in ALL_CAPS. What does this naming convention usually communicate to other programmers?

---

# Part 2 — JavaScript exercises

Create the files below and write JavaScript code to solve each task.

Use only what we have covered so far:

**variables, `let`, `const`, data types, type conversion, `prompt()`, `console.log()`, string methods, template literals, `typeof`, Boolean values, comparison operators, strict equality, logical operators, and `Math.round()`.**

> We have **not learned `if`, loops, functions, or arrays yet** — you do not need any of them for this homework.
>
> When you need a `true`/`false` answer, simply print the Boolean value with `console.log()`.

You can run each file with Node.js:

```bash
node exercise_1.js
```

---

## `exercise_1.js` — Greeting

Ask the user for their `name` using `prompt()`.

They might accidentally type extra spaces, so clean the text with `.trim()`.

Then print a greeting on **two lines** using a template literal, the escape sequence `\n`, and `.toUpperCase()`.

Example run:

```text
What is your name?
   nino

Welcome!
HELLO, NINO!
```

---

## `exercise_2.js` — Years to 100

Ask the user for their `age` using `prompt()`.

Remember that `prompt()` gives you text, so convert the result to a number.

Calculate how many years are left until they turn 100 and print the result using a template literal.

Example:

```text
How old are you?
21

You will turn 100 in 79 years.
```

---

## `exercise_3.js` — Celsius → Fahrenheit

Ask the user for a temperature in Celsius.

Convert the input to a number and convert it to Fahrenheit using:

```text
Fahrenheit = Celsius × 9 / 5 + 32
```

Use `Math.round()` to round the result to **1 decimal place**.

> Hint: `Math.round()` by itself rounds to the nearest integer. Think about how multiplying and dividing by `10` could help you round to one decimal place.

Example:

```text
Temperature in Celsius:
36.6

36.6°C is 97.9°F
```

---

## `exercise_4.js` — Types and comparisons

Create variables containing the following values:

```text
"42"
42
true
3.14
```

Print the `typeof` of each value.

Then compare the string `"42"` and the number `42` using:

```text
==
===
!=
!==
```

Print the result of each comparison.

For example, your output should demonstrate that:

```text
"42" == 42
```

and

```text
"42" === 42
```

do **not** produce the same result.

Finally, write a short comment explaining which equality operator you would normally choose in your own code and why.

---

## `exercise_5.js` — Logical operators

Create the following variables:

```javascript
const age = 20;
const hasTicket = true;
const isStudent = false;
```

Use `console.log()` to test the following expressions:

1. Is the person at least 18 **and** does the person have a ticket?
2. Is the person a student **or** does the person have a ticket?
3. Is the person **not** a student?
4. Is the person under 18 **or** a student?
5. Is the person at least 18 **and** not a student?

Print each Boolean result.

Example:

```text
Adult with ticket: true
Student or has ticket: true
Not a student: true
Under 18 or student: false
Adult and not a student: true
```

---

## `exercise_6.js` — Circle area

Define a constant:

```javascript
const PI = 3.14159;
```

> The ALL_CAPS name is a convention that tells other programmers this value is intended to remain unchanged.

Ask the user for a circle's `radius` and convert it to a number.

Calculate the area using:

```text
PI × radius²
```

Use the exponent operator `**`.

Round the result to **2 decimal places** and print it using a template literal.

Example:

```text
Radius:
5

A circle with radius 5 has area 78.54
```

---

## `exercise_7.js` — Fix the bug

The program below is supposed to tell the user how old they will be next year, but it produces an unexpected result:

```javascript
const age = prompt("How old are you?\n");

console.log("Next year you will be " + age + 1 + " years old.");
```

Run it and see what happens.

Then:

1. Explain in a comment **why** the result is wrong.
2. Fix the program so that it correctly adds `1` to the user's age.
3. Print the result using a template literal.

> Hint: What data type does `prompt()` return? What happens when you use `+` with a string and a number?

---

## `exercise_8.js` — Strict equality challenge ⭐

Create the following variables:

```javascript
const a = 10;
const b = "10";
const c = 10;
const d = true;
```

Without changing the variables, print the result of these comparisons:

```text
a === b
a == b
a === c
a !== b
a !== c
b === "10"
d === 1
```

Before running the program, **guess the result of each comparison in comments**.

For example:

```javascript
// a === b -> false
```

Then run the program and see how many of your guesses were correct.

---

## `exercise_9.js` — Truthiness challenge ⭐

JavaScript has the concept of **truthy** and **falsy** values.

Test the following values:

```text
""
"0"
" "
0
-5
null
undefined
true
false
```

Use `Boolean()` to convert each value into a Boolean and print the results.

For example:

```javascript
console.log(Boolean(""));
console.log(Boolean("0"));
```

Before checking the answers, write your guesses in comments.

Then answer this question in a comment:

> Why is `"0"` truthy while `0` is falsy?

---

# Checklist before you submit

* [ ] `answers.md` with the Workshop 2 questions answered
* [ ] `exercise_1.js` … `exercise_9.js` written and runnable
* [ ] Everything pushed to your GitHub repository
* [ ] Homework is inside a `workshop_2_homework/` folder
* [ ] Repository link sent to the instructor

---

# Helpful links

* JavaScript `prompt()`: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
* JavaScript data types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
* `typeof`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
* String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
* Strict equality (`===`): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
* Logical operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
* `Boolean()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
* `Math.round()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
* `const`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
* Template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

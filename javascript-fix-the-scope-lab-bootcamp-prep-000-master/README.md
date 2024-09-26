JavaScript Fix the Scope Lab
---

## Objectives

- Explore scope in JavaScript
- Exercise bug-finding skills related to scope issues

## Instructions

In this lab, you'll need to debug some issues related to function scope in JavaScript: variables might not be what we expect, certain variables might be unavailable, and in general havoc might be set loose in the current code.

As usual, start by running the specs and reading the results. Then fix some things, run the tests again, and repeat.

You're probably pretty good at this right now — good luck!

## A Hint About `()`

Remember the purpose of using `()` is to call functions in JavaScript. It essentially tells our code to *execute* the function. A function called without a `()`, like simply `functionName`, will return the function but NOT run it. You'll see the return value as `[Function: functionName]`.

To get our code to execute that function, we instead call `functionName()`, which executes the code within that function.

As an example, the third test here at first returns: `Error: Expected [Function: funkyFunction] to equal 'FUNKY!'`

We can make the function execute by saying this:
`var theFunk = funkyFunction()` But this returns ANOTHER FUNCTION! How would we tell that function to execute to return the string within it?

## Resources

- [MDN: Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-fix-the-scope-lab'>Fix The Scope Lab</a> on Learn.co and start learning to code for free.</p>

JavaScript Arrays Lab
---

## Objectives

1. Practice writing arrays
2. Practice manipulating arrays
3. Explain how to manipulate arrays in a non-destructive way

## Introduction

Previously, we've learned about how arrays work. We know that `push()` pushes
elements onto the ends of arrays, and `pop()` pops them off; similarly,
`unshift()` adds elements to the beginnings of arrays, and `shift()` pulls them
off.

Now it's time to put what we've learned to the test.

## What's with all this destruction?

You might have noticed that our tests are looking for functions like
`destructivelyAppendKitten()` — what's up with that? (Rest assured, no kittens
will be harmed.)

We want to distinguish between actions that _mutate_ ("change") their underlying
structures (like `pop()`, `push()`, `shift()`, and `unshift()`) and those
functions that leave those structures untouched.

In general, it's good practice to avoid mutating a program's state whenever
possible. So we want to call out these methods as destructive, since mutating
state means we don't always know what we're dealing with. Indeed, these
mutations mean that we need to refresh the test environment after every test to
make sure that we're not working with mutated data!


By contrast, we also have methods like `appendKitten()`, which simply adds a
kitten to the end of the `kittens` array and returns the _new_ array, leaving
the existing array untouched. This flow is preferable to mutating state because
we have complete control over what's going into and coming out of the function.

Try to use methods like `slice()` or `concat()` to return a new
array when keeping the original array intact. 

* [concat()][concat]

* [slice()][slice]

Think of it this way: you're making a peanut butter and jelly sandwich. Would
you rather work with a sandwich where someone had put an unspecified amount of
peanut butter or jelly on the bread before you start making it (or, worse, where
someone had taken a bite out of the bread), or would you rather start fresh?

Regardless of your feelings about stale peanut butter and jelly, we're going to
state unequivocally that fresh sandwiches are preferable — and fresh functions
(ones that don't _mutate_ shared state) are preferable, too.

## Run those tests!

You'll notice that the first test asks for an array called `kittens`, set to an
initial value of `["Milo", "Otis", "Garfield"]`.

In our test file, we're going to reset this array to your initial value after
every test. Some of our tests manipulate arrays in place, and we want to be sure
that we can get back to a blank slate between tests.

Why is a blank slate important? We want our programs to be predictable: this
makes them more robust, easier to maintain, and less prone to bugs. One way to
achieve predictability is by isolating our tests from one another, meaning that
no test should depend on the outcome or process of any other test. That way,
tests can run in any order and test _known_ inputs and environments, rather than
depending on other tests running first and modifying the entire environment.

Remember the workflow:

1. Run `learn test`.

2. Read the errors; vocalize what they're asking you to do.

3. Write code, save, and repeat steps 1 and 2 often until a test passes.

4. Repeat as needed for further tests.

5. Run `learn submit` when finished!

Normally, resetting the array and the array itself would be _decoupled_ — that
is, independent. But because of the nature of this lab, we need to be a bit
prescriptive and give you some initial values so that we can focus on what
really matters — understanding how to manipulate arrays in JavaScript.

## Resources

- [npm](https://npmjs.org)

[concat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=control
[slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice?v=control

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-arrays-lab'>Javascript Arrays Lab</a> on Learn.co and start learning to code for free.</p>


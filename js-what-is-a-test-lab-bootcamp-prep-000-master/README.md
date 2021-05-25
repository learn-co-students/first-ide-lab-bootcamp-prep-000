# Running Tests

You understand how to read tests, now it's time to run the tests. We've made it fairly easy. In the same terminal that you used to write `nodejs tests.js` or `nodejs index.js` now, you just need to write `learn`. That's it! No matter what the lab, our Learn command will figure out where you are and run the appropriate tests and give you results.

Speaking of results... let's talk about how to read the results that tests give you.

## Reading Results of Tests

If we run `learn` in our terminal right now, you'll get a bunch of failed tests. It will look something like this: 

**Output from running `learn` in Terminal** 

```
> js-functions-lab@0.1.0 test /Users/joe/Documents/Documents/flatiron/js-what-is-a-test-lab
> mocha -R mocha-multi --reporter-options nyan=-,json=.results.json

 0   -_-__,------,
 3   -_-__|  /\_/\
 0   -_-_~|_( x .x)
     -_-_ ""  ""

  0 passing (612ms)
  3 failing

  1) what-is-a-test Name returns "Susan":

      Error: Expected 'Joe' to equal 'Susan'
      + expected - actual

      -Joe
      +Susan

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.it (test/index-test.js:6:26)

  2) what-is-a-test Height is less than 40:
     Error: Expected 74 to be less than 40
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toBeLessThan (node_modules/expect/lib/Expectation.js:156:28)
      at Context.it (test/index-test.js:13:28)

  3) what-is-a-test Message gives the name and height:
     Error: Expected ' is 74 inches tall' to include 'Joe'
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toInclude (node_modules/expect/lib/Expectation.js:215:28)
      at Context.it (test/index-test.js:19:29)



npm ERR! Test failed.  See above for more details.
```

Let's break this down a bit. If you look at the line under the cat (I love programmers) you'll see a summary of how the tests went:

```
0 passing (612ms)
3 failing
```

That should be fairly obvious. You passed 0 tests and failed 3 tests. Not a great start, but plenty of room for improvement. Let's see how we failed the three tests.

```
1) what-is-a-test Name returns "Susan":

  Error: Expected 'Joe' to equal 'Susan'
  + expected - actual

  -Joe
  +Susan

  at assert (node_modules/expect/lib/assert.js:29:9)
  at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
  at Context.it (test/index-test.js:6:26)

2) what-is-a-test Height is less than 40:
 Error: Expected 74 to be less than 40
  at assert (node_modules/expect/lib/assert.js:29:9)
  at Expectation.toBeLessThan (node_modules/expect/lib/Expectation.js:156:28)
  at Context.it (test/index-test.js:13:28)

3) what-is-a-test Message gives the name and height:
 Error: Expected ' is 74 inches tall' to include 'Joe'
  at assert (node_modules/expect/lib/assert.js:29:9)
  at Expectation.toInclude (node_modules/expect/lib/Expectation.js:215:28)
  at Context.it (test/index-test.js:19:29)
```

This is all three of the fails. If we break it down even further we can see just the test for `name`:

```
1) what-is-a-test Name returns "Susan":

Error: Expected 'Joe' to equal 'Susan'
+ expected - actual

-Joe
+Susan

at assert (node_modules/expect/lib/assert.js:29:9)
at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
at Context.it (test/index-test.js:6:26)
```

The tests expects `name` to return `"Susan"`. But if you look at the `Error: Expected 'Joe' to equal 'Susan'` line you can see that it received `Joe` and expected `Susan`. That makes sense! In our `index.js` file we have the `name` variable equal `"Joe"`. If you change that line to be equal to `"Susan"` and then run the tests again by typing `learn` in the command line you should see progress!

```
1   -_-__,------,
 2   -_-__|  /\_/\
 0   -_-_~|_( x .x)
     -_-_ ""  ""

  1 passing (953ms)
  2 failing

  1) what-is-a-test Height is less than 40:
     Error: Expected 74 to be less than 40
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toBeLessThan (node_modules/expect/lib/Expectation.js:156:28)
      at Context.it (test/index-test.js:13:28)

  2) what-is-a-test Message gives the name and height:
     Error: Expected ' is 74 inches tall' to include 'Susan'
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toInclude (node_modules/expect/lib/Expectation.js:215:28)
      at Context.it (test/index-test.js:19:29)
```

Woot! You passed one. Now you can go ahead and try and pass all of the other tests on your own.

### Common Errors
While you are solving the other tests you may come across a few errors. Let's go over some common ones:

#### Expected Undefined

```
Error: Expected undefined to equal 'Susan'
```

That one says that it expected `undefined` to equal Susan. That makes no sense! You didn't set the `name` variable to `undefined`. Why does it think that `name` is equal to `undefined`? What that actually means is that the test couldn't find the variable `name`. This can happen if you by accident rename the variable. Taking a look at `index.js` I made this mistake: `var nae = "Susan"`. Whoops! If I change that back to `name` everything works. :)

#### Unexpected identifier

```
/Users/joe/Documents/Documents/flatiron/js-what-is-a-test-lab/index.js:2
vr name = "Susan"
   ^^^^
SyntaxError: Unexpected identifier
    at createScript (vm.js:56:10)
    at Object.runInThisContext (vm.js:97:10)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/joe/Documents/Documents/flatiron/js-what-is-a-test-lab/test/index-test.js:1:75)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at /Users/joe/Documents/Documents/flatiron/js-what-is-a-test-lab/node_modules/mocha/lib/mocha.js:220:27
    at Array.forEach (native)
    at Mocha.loadFiles (/Users/joe/Documents/Documents/flatiron/js-what-is-a-test-lab/node_modules/mocha/lib/mocha.js:217:14)
    at Mocha.run (/Users/joe/Documents/Documents/flatiron/js-what-is-a-test-lab/node_modules/mocha/lib/mocha.js:469:10)
    at Object.<anonymous> (/Users/joe/Documents/Documents/flatiron/js-what-is-a-test-lab/node_modules/mocha/bin/_mocha:404:18)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:393:7)
    at startup (bootstrap_node.js:150:9)
    at bootstrap_node.js:508:3
```

Woah! So many words that make no sense. Don't worry though. The most important line is the `SyntaxError: Unexpected identifier` line. What that means is you have some sort of typo or syntax mistake, It could be a HUGE variety of things but usually, JS will try and give you a hint. This time it's pointing to the `vr name = "Susan"` line of code. Take a look and read _very carefully_. I misspelled `var`. Whoops! If you fix that everything will work. 

One note on this type of error is that it is sort of a catch-all. Tons and tons of problems end in that sort of error message. Whenever you see it, be sure to read over your code with a fine toothed comb...and you'll find the problem!

<p class='util--hide'>View <a href='https://learn.co/lessons/js-what-is-a-test-lab'>What Is A Test Lab</a> on Learn.co and start learning to code for free.</p>

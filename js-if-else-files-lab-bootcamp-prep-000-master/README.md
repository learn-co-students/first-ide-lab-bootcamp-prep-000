# Using Conditionals and Multiple Files in JS

We now know how to use conditionals. Now let's use conditionals to test our code for correctness. This is your first step towards how professional developers write software. Professional developers have to test their code for correctness. Instead of constantly clicking around their applications, most developers write additional code, called tests that ensure their code is outputting the right things. 

We will eventually explain how to use the professional testing tools but first, let's go over a simple example.

After you open this lesson in the IDE, double-click on `index.js`. You'll see some basic code:

```javascript
var name = "Joe"
var height = "74"

// Don't worry about this
module.exports = { name, height
}
```

First of all, don't worry about the `module.exports` stuff right now, we'll get to that later. You've seen the rest of this stuff before but let's review. This assigns `"Joe"` to the `name` variable using the assignment operator (`=`). It also assigns `"74"` to `height`. Both `"Joe"` and `"74"` are Strings. We know that because they are wrapped in quotes. We have our code, but we don't have our tests. Let's write a test right below the `var height = "74"` line to check that `name` is equal to `"Susan"`. That should look something like this:

```javascript
if (name === "Susan") {
    console.log("The name is correct")
}
```

Write that, and then run your `index.js` file with a `nodejs index.js` in the terminal. You'll see nothing printed out. That's because our `name` variable doesn't equal `"Susan"`. Let's put in an `else` statement that prints `"Expected the name to be Susan"`. Give it a try on your own.

OK, you gave it a try, now let's look at the solution:

```javascript
if (name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected the name to be Susan")
}
```

See what we did there? Great! Now run your code again by typing `nodejs index.js` in the terminal and you should get `Expected the name to be Susan` printed out. Let's fix our `name` variable to equal `"Susan"`. Modify the first line to say:

```javascript
var name = "Susan"
```

Re-run your code and boom! you did it :) 

In later steps, we'll be doing our testing in other files. So, for now, let's revert index.js to its original state. Make sure the index.js file is saved and that it looks like this:

```
var name = "Joe"
var height = "74"

// Don't worry about this
module.exports = { name, height
}
```

### Separating Tests from Application Code

As you can probably imagine a large application will have many tests. Average sized applications will have thousands of tests. It gets a bit confusing to have the application code mixed in with your test code. We want to separate them out so it's not a pain to sift through our files.

Let's open up another javascript file and play around with separating things out. There is a blank JS file included in this lab called `other_file.js`. Double click on that and you'll see a blank file. Let's say we wanted to `console.log` the `name` variable from our `index.js` file. Seems fairly easy. Go ahead and type `console.log(name)`. Now let's run this new file by typing `nodejs other_file.js` in our terminal. BOOM! You'll get an error that looks like this:

```
/home/jmburges/code/labs/js-functions-lab/test.js:1                                     
(function (exports, require, module, __filename, __dirname) { console.log(name)         
                                                                          ^             
                                                                                        
ReferenceError: name is not defined                                                     
    at Object.<anonymous> (/home/jmburges/code/labs/js-functions-lab/test.js:1:75)      
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

The important line here is the `ReferenceError: name is not defined` line. That says that our `name` variable doesn't exist in the `other_file.js` file. That makes sense. In `other_file.js` we never write the line of code to create `name`. We have the line `var name = "Susan"` in `index.js`. We need to tell `other_file.js` about the existence of `index.js`! Let's do that by replacing the contents of `other_file.js` with the following line of code:

```javascript
var index = require("./index.js")
```

This tells javascript to load the `index.js` file and put its contents inside of the `index` variable within `other_file.js`. That's a bit confusing, but it's fairly straight forward to use. Thanks to `require()`, we now have access to the variables we exported from `index.js`, including `name`. To access `name` within `other_file.js`, we can simply refer to the `name` property of the `index` variable, which, again, is where we used `require()` to store the contents of `index.js`. Let's add the following line to `other_file.js`:

```javascript
var index = require("./index.js")

console.log(index.name)
```

Give that a run by typing `nodejs other_file.js` and you should see the name getting printed out. Awesome.


### Your Turn

You now know how multiple files interact as well as how `if` statements work. Now you have to write your code to match some specific tests. Open up `tests.js` and you will see two `if` statements. Let's give this a run to start things off by typing `nodejs tests.js`. You should get two messages:

```
Expected: Susan, Received: Joe
Expected: 70, Received: 74
```

Now it's your job to modify `index.js` so that when you run `nodejs tests.js` the messages you see logged to the console are:
```
The name is correct 
The height is correct
```
**One note: Capitalization matters and String vs. Numbers matter. Numbers don't have any quotes around them, Strings do have quotes around them!** 

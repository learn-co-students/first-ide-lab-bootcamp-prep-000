# Strings and Numbers Outside of the Browser

In our effort to familiarize ourselves with the Learn IDE, Let's play with
strings and numbers again but in the Learn IDE. First things first though, let's
open this lab in the Learn IDE. Go ahead and click the blue "Open" button at the
top of this page. You should then be _whisked_ away to the IDE.

Alright! This lab is _very important_. I'm going to teach you how to approach
all labs...and really everything in coding. That's a huge statement, but
programming is actually fairly simple if you follow this process.

First things first, let's run the code we are given. That should always be your
first task. Just like when you are using a map to find a new restaurant, you
need to know where you are _now_ before you can know where you need to go. To
run the code, type `node index.js` in your terminal. You should get something
like this:

```js
Name: Joe;
Height: 74;
```

Look familiar? Open up the `index.js` file and take a look. No HTML here, but
you can see some basic things. The first two lines of code are below:

```javascript
var name = 'Joe';
var height = '74';
```

These two just assign the value `"Joe"` and `"74"` to `name` and `height`,
respectively. `name` and `height` are variables. `"Joe"` and `"74"` are Strings.
We know they are Strings because they are wrapped in quotes. The next four lines
do all of the outputting to your terminal.

```javascript
console.log('Name:');
console.log(name);

console.log('Height:');
console.log(height);
```

The first two at first print the String `"Name:"`, then it prints the _value
inside `name`_. Earlier in our program, we assigned `name` a value of `"Joe"`.
So, it prints out `Joe`. Nice! What if we put `name` in quotes?. Give it a try,
then run your program again by typing `node index.js`. You should see it print
out the literal `name` instead of `Joe`. You just converted `name` from a
variable into a String. Remove the quotes and everything will work again.

Ok, go ahead and change the `name` variable to your name. To do this, modify the
first line to something like this `var name = "Janet"`. Re-run your code and
you'll see everything gets updated. Awesome.

Finally, we are going to modify our height. You could modify the height the same
way we modified `name`. Simply change the `"74"` to whatever your height is.
Remember last time though? We wanted to just have you "grow" by adding `1` to
our current height. We can try that out by modifying the `console.log(height)`
line by writing `console.log(height+1)`. If you re-run that code you'll see it
just appends `1` to the end of whatever height you had. That's not what we want!
We want proper addition to occur. Just like last time, we need to translate our
String (`"74"`) into a number. You can do this in your `console.log` like this:
`console.log(parseInt(height) + 1 )`. That converts `"74"` into a number and
then adds one. If you re-run the code now you'll see that it works! The other
way we can modify this is to change the assignment of the variable in the first
place. So let's modify the `var height = "74"` line to look like this

```javascript
var height = 74;
```

Boom! We took away the quotes and now it's a number not a string. You can remove
the `parseInt` part of your `console.log` to look like this:
`console.log(height + 1)` and everything should work properly.

Now it's time to submit your work back to learn. Go ahead and run `learn submit`
in the terminal. You should then get a few more green lights and be ready to
move on to the next lesson. Congratulations

<p class='util--hide'>View <a href='https://learn.co/lessons/js-node-practice-lab'>Node Practice</a> on Learn.co and start learning to code for free.</p>

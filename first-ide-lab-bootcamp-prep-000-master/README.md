# Your First IDE Lab

Now that you've downloaded and installed the Learn IDE, it's time to solve your first lab.

Watch the video below to see how to solve this lab.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UuObhDt9ZV0?rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe><p><a href="https://www.youtube.com/watch?v=UuObhDt9ZV0">First IDE Lab</a></p>

## Instructions

Open this lab in the Learn IDE, edit the file `edit-me.txt` in this lab using the Learn IDE, run the tests with `learn` and submit the lab with `learn submit`.

If you feel comfortable with that, go ahead and try it now by clicking the "Open" button. Otherwise continue reading for a more detailed explanation.

**If you are new to programming, please watch the video below and read the entire lab before beginning.**

The context of reading everything you're going to do before you start will help. Then you can follow along with the lab and it will be easier.

If you haven't already <a href="https://learn.co/ide-3/download"><img height="56px" width="auto" style="display: inline;" src="//s3-us-west-2.amazonaws.com/curriculum-content/streamlined-onboarding/download-ide-button.png" /></a>


### 1. Opening a Lab with the Learn IDE

The Learn IDE works best when you open it along with a lab to work on.

Whenever you're on a lab in Learn that requires the Learn IDE, you'll see an "Open Button" on the Lab's header.

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-sample-header.png" style="border: 1px solid #000; display: block" alt="Lab Header">

Go ahead and click on the Open Button on the Lab's header (not the image above, that's just a sample). The Learn IDE you downloaded and installed in the previous lesson should open.

If clicking on the Open Button did not do anything or gave you an error message, there is a good chance you did not download and install the Learn IDE correctly. Use Ask a Question to get live support or read about [Installing the Learn IDE in the Help Center](http://help.learn.co/the-learn-ide/ide-download-installation-and-set-up-tutorial).

### 2. Login to the Learn IDE

After clicking the "Open Button", the Learn IDE should open and prompt you to login.

Once you login to the IDE, come back to your web browser and continue reading this guide.

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-login.png" style="display: block; border: 1px solid #000">
You can login via the Email and Password you used to create your Learn Account or you can use your new GitHub account to Sign In.

Once you login to the Learn IDE, the lab should open and should look something like:

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-ide.png" style="display: block">

### 3. Navigate Folders with the File Tree

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-file-tree.png" style="display: block">

The File Tree in the IDE is a way to browse the file and folders in the lab. It works a lot like a file browser on your computer, showing you the top level folder on top, generally the lab name, and then all the files and folders inside the folder.

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-expanded-tree.png" style="display: block">

A folder is represented in the file tree with a Folder icon and a `>` showing that it is currently folded or closed, hiding the files inside it. If you click on the folder you can expand it or open it, revealing the files inside the directory.

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-context-menu.png" style="display: block">

You can "Right Click" in the File Tree and a context menu will appear, giving you options to work within the folders and files of the lab, like creating a New File or New Folder. When creating a new file or new folder via the context menu, it will be created within the directory you right clicked on, so in the image above, the right click occurred within the `spec` directory, so any new file created would appear there.

### 4. Open a File from the File Tree

When you want to actually edit a file, you can click or double click on it in the File Tree. The file will then open in a new tab in the text editor.

**After opening this lab with the "Open" button, use the File Tree and click on the file `edit-me.txt` to open it.**

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/opening-a-file.png" style="display: block">

### 5. Edit a File with the Text Editor

Once you've opened a file, every tab you see is the Text Editor that allows you to edit the contents of the file. This is where we do our programming and write our code. You open the files you want to edit in a tab in the text editor and can write code and save the file. Each tab gets the name of the file you are editing.

**If you've clicked on `edit-me.txt` as described in how to open a file, you should see a tab now with the title `edit-me.txt`. The file is totally empty. Go ahead and write anything in the file, `Hello World!`, your name, anything. To pass this lab all you need to do is not have a blank `edit-me.txt` file.**

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/editing-a-file.png" style="display: block">

### 6. Saving a File

After you edit a file, you must save it. As mentioned above, each file tab will indicate if the file has been changed and not saved by putting a dot on the right corner of the tab. Once you're done editing a file, save it by going to File -> Save in the application menu, pressing ⌘+S (Command and S at the same time) on a Mac, or Ctrl+S (Control and S at the same time) on Windows.

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/saving-a-file.png" style="display: inline">
<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/saved-edited-file.png" style="display: inline">

Notice how after saving the file, the blue dot disappears on the tab.

### 7. Running a Command with Your Terminal

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/ide-terminal.png" style="display: block">

On the bottom of the IDE is a Terminal. This is your access point to your development environment that the Learn IDE provides. As a programmer, we use the terminal for a lot of tasks including actually running our code and programs and executing commands. You're going to learn a lot about how to use a Terminal, but for now, know that you can type certain commands into it. Let's try one, `ls` (the letter `L`, but lowercase, and the letter `S`, but lowercase). Click into the terminal, then type `ls` and press enter to execute the command.

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/ls-terminal.png" style="display: block">

`ls` stands for list and it will list all the files in the directory, similar to the file tree. After you press enter you will see output from the terminal responding to the command you typed.

Try another one, from your terminal, type `pwd`, which stands for print working directory, which is the current directory the terminal is in.

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/pwd-terminal.png" style="display: block">

As you can see, the terminal is in the `first-ide-lab` directory which is the folder that contains this lab.

### 8. Running Your Tests from Your Terminal

Now that you know how to run commands from your Terminal, the next step is to run the `learn` command. Each lab comes with a challenge or problem you need to solve by writing code, demonstrating that you understand the concepts and can implement them in your programs. Labs are "test driven", which means we include code in the lab that checks to see if the code you write correctly solves the challenge. To check your lab and run the tests, you type in `learn` in your terminal.

The challenge of this lab is to edit the file `edit-me.txt`. When that file is empty, if you run `learn` from your terminal, you would see:

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/failing-test.png" style="display: block">

This is a failing test, which is totally normal, all labs are failing until you make them pass.

You can see from the output in your terminal some information about why the lab is currently failing. You don't need to understand all of the test output but there will always be hints as to what you're suppose to do to solve the lab. For example:

```
First Lab:
  you made an edit to edit-me.txt (FAILED - 1)
```

That's a pretty helpful message, the tests are telling you that you should have made an edit to edit-me.txt

Once you edit `edit-me.txt` to contain any text and not be empty, if you re-run `learn` from your terminal, you would see:

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/passing-test.png" style="display: block">

Notice that the `edit-me.txt` file has text in it and is saved. The tests now report that everything is passing and there are no failures.

When you run `learn`, you will also see that the Learn website is aware of the status of your lab represented by the "Lights" on the right.

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/failing-lights.png" style="display: inline">
<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/passing-lights.png" style="display: inline">

**Make sure you've edited `edit-me.txt` and added any text, saved the file, and then run `learn` from your terminal to see if your tests are passing.**

### 9. Submitting a Lab with `learn submit`

The last step to completing a lab with the Learn IDE is to submit it. You can do this at anytime by typing `learn submit` in your terminal.

<img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-submit.png" style="display: block">

If the tests are passing and the lab is submitted, all lights will turn green and you can move onto the next lesson.

Congratulations, you've passed your first lab!!!

## Summary

For every lab, the workflow you will use to solve it is:

1. Open the lab by clicking the "Open" button.

2. Read the README of the lab and get a sense of what the lab wants you to do.

3. Run the tests with `learn` from your terminal.

4. Open any files you need to edit using the File Tree.

5. Write code in the Text Editor that will satisfy the lab requirements.

5. Run the `learn` command in your Terminal as many times as you need to get feedback.

6. Once the tests are passing or even if you're just done for the day, submit the lab with `learn submit`.

7. If you ever get stuck, use "Ask a Question" to get help, don't be shy!

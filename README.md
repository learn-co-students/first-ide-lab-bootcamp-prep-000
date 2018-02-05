# Your First IDE Lab

<div class="readme-content-test--hide-when-active">

  <br>

  Now that you've downloaded and installed the Learn IDE, it's time to solve your first lab.

  Watch the video below to see how to solve this lab.

  <iframe width="560" height="315" src="https://www.youtube.com/embed/UuObhDt9ZV0?rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe><p><a href="https://www.youtube.com/watch?v=UuObhDt9ZV0">First IDE Lab</a></p>

  <h1>Instructions</h1>
  
  <br>

  Open this lab in the Learn IDE, edit the file <code>edit-me.txt</code> in this lab using the Learn IDE, run the tests with <code>learn</code> and submit the lab with <code>learn submit</code>.

  If you feel comfortable with that, go ahead and try it now by clicking the "Open" button. Otherwise continue reading for a more detailed explanation.

  <strong>If you are new to programming, please watch the video below and read the entire lab before beginning.</strong>

  The context of reading everything you're going to do before you start will help. Then you can follow along with the lab and it will be easier.

  If you haven't already: 
  <br>
  <a href="https://learn.co/ide-3/download"><img height="56px" width="auto" style="display: inline;" src="//s3-us-west-2.amazonaws.com/curriculum-content/streamlined-onboarding/download-ide-button.png" /></a>


  <h1>1. Opening a Lab with the Learn IDE</h1>
  
  <br>

  The Learn IDE works best when you open it along with a lab to work on.

  Whenever you're on a lab in Learn that requires the Learn IDE, you'll see an "Open Button" on the Lab's header.

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-sample-header.png" style="border: 1px solid #000; display: block" alt="Lab Header">
  
  <br>

  Go ahead and click on the Open Button on the Lab's header (not the image above, that's just a sample). The Learn IDE you downloaded and installed in the previous lesson should open.
  
  <br>

  If clicking on the Open Button did not do anything or gave you an error message, there is a good chance you did not download and install the Learn IDE correctly. Use Ask a Question to get live support or read about <a href="http://help.learn.co/the-learn-ide/ide-download-installation-and-set-up-tutorial">Installing the Learn IDE</a> in the Help Center.

  <h1>2. Login to the Learn IDE</h1>
  
  <br>

  After clicking the "Open Button", the Learn IDE should open and prompt you to login.

  Once you login to the IDE, come back to your web browser and continue reading this guide.

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-login.png" style="display: block; border: 1px solid #000"/>
  
  <br>
  
  You can login via the Email and Password you used to create your Learn Account or you can use your new GitHub account to Sign In.

  Once you login to the Learn IDE, the lab should open and should look something like:

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-ide.png" style="display: block"/>

  <h1>3. Navigate Folders with the File Tree</h1>
  
  <br>

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-file-tree.png" style="display: block"/>
  
  <br>

  The File Tree in the IDE is a way to browse the file and folders in the lab. It works a lot like a file browser on your computer, showing you the top level folder on top, generally the lab name, and then all the files and folders inside the folder.

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-expanded-tree.png" style="display: block"/>
  
  <br>

  A folder is represented in the file tree with a Folder icon and a `>` showing that it is currently folded or closed, hiding the files inside it. If you click on the folder you can expand it or open it, revealing the files inside the directory.

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-context-menu.png" style="display: block"/>
  
  <br>

  You can "Right Click" in the File Tree and a context menu will appear, giving you options to work within the folders and files of the lab, like creating a New File or New Folder. When creating a new file or new folder via the context menu, it will be created within the directory you right clicked on, so in the image above, the right click occurred within the <code>spec</code> directory, so any new file created would appear there.

  <h1>4. Open a File from the File Tree</h1>

  <br>

  When you want to actually edit a file, you can click or double click on it in the File Tree. The file will then open in a new tab in the text editor.

  <strong>After opening this lab with the "Open" button, use the File Tree and click on the file <code>edit-me.txt</code> to open it.</strong>

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/opening-a-file.png" style="display: block"/>

  <h1>5. Edit a File with the Text Editor</h1>
  
  <br>

  Once you've opened a file, every tab you see is the Text Editor that allows you to edit the contents of the file. This is where we do our programming and write our code. You open the files you want to edit in a tab in the text editor and can write code and save the file. Each tab gets the name of the file you are editing.
  
  <br>
  <br>

  <strong>If you've clicked on <code>edit-me.txt</code> as described in how to open a file, you should see a tab now with the title <code>edit-me.txt</code>. The file is totally empty. Go ahead and write anything in the file, <code>Hello World!</code>, your name, anything. To pass this lab all you need to do is not have a blank <code>edit-me.txt</code> file.</strong>

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/editing-a-file.png" style="display: block"/>

  <h1>6. Saving a File</h1>
  
  <br>

  After you edit a file, you must save it. As mentioned above, each file tab will indicate if the file has been changed and not saved by putting a dot on the right corner of the tab. Once you're done editing a file, save it by going to File -> Save in the application menu, pressing ⌘+S (Command and S at the same time) on a Mac, or Ctrl+S (Control and S at the same time) on Windows.
  
  <br>

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/saving-a-file.png" style="display: inline"/>
  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/saved-edited-file.png" style="display: inline"/>
  
  
  <br>
  <br>
  Notice how after saving the file, the blue dot disappears on the tab.

  <h1>7. Running a Command with Your Terminal</h1>

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/ide-terminal.png" style="display: block"/>
  
  <br>

  On the bottom of the IDE is a Terminal. This is your access point to your development environment that the Learn IDE provides. As a programmer, we use the terminal for a lot of tasks including actually running our code and programs and executing commands. You're going to learn a lot about how to use a Terminal, but for now, know that you can type certain commands into it. Let's try one, <code>ls</code> (the letter <code>L</code>, but lowercase, and the letter <code>S</code>, but lowercase). Click into the terminal, then type <code>ls</code> and press enter to execute the command.

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/ls-terminal.png" style="display: block"/>
  
  <br>

  <code>ls</code> stands for list and it will list all the files in the directory, similar to the file tree. After you press enter you will see output from the terminal responding to the command you typed.

  Try another one, from your terminal, type <code>pwd</code>, which stands for print working directory, which is the current directory the terminal is in.
  
  <br>

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/pwd-terminal.png" style="display: block"/>
  
  <br>

  As you can see, the terminal is in the <code>first-ide-lab</code> directory which is the folder that contains this lab.

  <h1>8. Running Your Tests from Your Terminal</h1>
  
  <br>

  Now that you know how to run commands from your Terminal, the next step is to run the <code>learn</code> command. Each lab comes with a challenge or problem you need to solve by writing code, demonstrating that you understand the concepts and can implement them in your programs. Labs are "test driven", which means we include code in the lab that checks to see if the code you write correctly solves the challenge. To check your lab and run the tests, you type in <code>learn</code> in your terminal.
  
  <br>
  <br>

  The challenge of this lab is to edit the file <code>edit-me.txt</code>. When that file is empty, if you run <code>learn</code> from your terminal, you would see:

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/failing-test.png" style="display: block"/>
  
  <br>

  This is a failing test, which is totally normal, all labs are failing until you make them pass.
  
  <br>
  <br>

  You can see from the output in your terminal some information about why the lab is currently failing. You don't need to understand all of the test output but there will always be hints as to what you're suppose to do to solve the lab. For example:

  <pre class="highlight plaintext"><code class=" linenums prettyprint plaintext "><ol class="linenums"><li class="L0">First Lab:</li><li class="L1">  you made an edit to edit-me.txt (FAILED - 1)</li></ol></code></pre>

  That's a pretty helpful message, the tests are telling you that you should have made an edit to <code>edit-me.txt</code>

  Once you edit <code>edit-me.txt</code> to contain any text and not be empty, if you re-run <code>learn</code> from your terminal, you would see:

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/passing-test.png" style="display: block"/>
  
  <br>

  Notice that the <code>edit-me.txt</code> file has text in it and is saved. The tests now report that everything is passing and there are no failures.
  
  <br>

  When you run <code>learn</code>, you will also see that the Learn website is aware of the status of your lab represented by the "Lights" on the right.
  
  <br>

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/failing-lights.png" style="display: inline"/>
  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/passing-lights.png" style="display: inline"/>
  
  <br>
  <br>

  <strong>Make sure you've edited <code>edit-me.txt</code> and added any text, saved the file, and then run <code>learn</code> from your terminal to see if your tests are passing.</strong>

  <h1>9. Submitting a Lab with <code>learn submit</code></h1>
  
  <br>

  The last step to completing a lab with the Learn IDE is to submit it. You can do this at anytime by typing <code>learn submit</code> in your terminal.

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-submit.png" style="display: block"/>
  
  <br>

  If the tests are passing and the lab is submitted, all lights will turn green and you can move onto the next lesson.
  
  <br>
  <br>

  Congratulations, you've passed your first lab!!!

  <h2>Summary</h2>
  
  <br>

  For every lab, the workflow you will use to solve it is:
  
  <br>

  1. Open the lab by clicking the "Open" button.
  
  <br>

  2. Read the README of the lab and get a sense of what the lab wants you to do.
  
  <br>

  3. Run the tests with <code>learn</code> from your terminal.
  
  <br>

  4. Open any files you need to edit using the File Tree.
  
  <br>

  5. Write code in the Text Editor that will satisfy the lab requirements.
  
  <br>

  6. Run the <code>learn</code> command in your Terminal as many times as you need to get feedback.
  
  <br>

  7. Once the tests are passing or even if you're just done for the day, submit the lab with <code>learn submit</code>.
  
  <br>

  8. If you ever get stuck, use "Ask a Question" to get help, don't be shy!
 </div>
 
 
 
 <div class="readme-content-test--show-when-active">
  <br>
  
  <h1> Your First IDE Lab</h1>

  Now that you've learned about the Learn IDE, it's time to solve your first lab. Watch the video below to see how to solve this lab.

  <iframe width="560" height="315" src="https://www.youtube.com/embed/T7PVTSkleAk" frameborder="0" allowfullscreen></iframe><p><a href="https://www.youtube.com/watch?v=T7PVTSkleAk&feature=youtu.be">First IDE Lab</a></p>

  <h1>Instructions</h1>
  
  <br>

  Open this lab in the Learn IDE, edit the file <code>edit-me.txt</code> in this lab using the Learn IDE, run the tests with <code>learn</code> and submit the lab with <code>learn submit</code>.

  If you feel comfortable with that, go ahead and try it now by clicking the "Open IDE" button. Otherwise continue reading for a more detailed explanation.

  <strong>If you are new to programming, please read the entire lab before beginning.</strong>

  The context of reading everything you're going to do before you start will help. Then you can follow along with the lab and it will be easier.


  <h1>1. Opening a Lab with the Learn IDE</h1>
  
  <br>

  Whenever you're on a lab in Learn that requires the Learn IDE, you'll see an "Open IDE" button on the Lab's header.

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-sample-header.png" style="display: block"/>
  
  <br>

   When you click the Open button for the first time, the IDE will take over your browser window and a tour of the IDE features will begin. When the tour is finished, the IDE and this lesson text will be side by side so you can continue reading while looking at the IDE. Go ahead and click the Open IDE button to take the tour. If clicking on the Open IDE button did not do anything, or gave you an error message, use Ask a Question to get support in real time.
   
   <br>
   <br>
   
   Now that you've taken a tour of the IDE, you have an idea of the different components. Let's review what you learned, and then take a closer look at how to work on a lab in the IDE.
   
   <br>
   <br>
  
  You can click on Full Screen to have the IDE take over your browser window. 
  
  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/splitscreenidetext.png" style="display: block;" height="auto" width="auto"/>
  <br>
  
  
  To view the IDE at Split Screen (the default when you open a lab in the IDE) you click Split Screen.
 
  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/fullscreenidetext.png" style="display: block;" height="auto" width="auto"/>
  
  <br>
  
  You can open or hide the file tree when you are in Split Screen, so you have more room to work in the text editor and terminal.
  
  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/filetreeopen.png" style="display: block;" height="auto" width="auto"/>
  <br>
   
   
  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/filetreehidden.png" style="display: block;" height="auto" width="auto"/>
  <br>

  <h1>2. Navigate Folders with the File Tree</h1>
  
  <br>

  The File Tree in the IDE is a way to browse the file and folders in the lab. It works a lot like a file browser on your computer, showing you the top level folder on top, generally the lab name, and then all the files and folders inside the folder.
  
  <br>
  <br>

  A folder (called a directory), is represented in the file tree with a Folder icon and a `>` showing that it is currently folded or closed, hiding the files inside it. If you click on the folder you can expand it or open it, revealing the files inside the directory.

  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/openingdirectory.png" style="display: block;" height="auto" width="auto"/>
  <br>

  You can "Right Click" on any directory in the File Tree and a context menu will appear, giving you options to create a new file or directory, or rename, move, duplicate, or delete the selected directory. When creating a new file or new directory via the context menu, it will be created within the directory you right clicked on, so in the image below, the right click occurred within the <code>spec</code> directory, so any new file created would appear there. If you "Right Click" on a file you will see options to rename, move, duplicate, or delete the selected file. 
  
  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/menu.png" style="display: block;" height="auto" width="auto"/>
  <br>
  
  You can also add a file or directory by clicking the "Create New +" button at the bottom of the file tree. 
  
  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/createnew.png" style="display: block;" height="auto" width="auto"/>
  <br>
  
  When you create a file or directory from this button, you can define the path of the file or directory.
  
  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/createnewpath.png" style="display: block;" height="auto" width="auto"/>
  <br>

  <h1>3. Open a File from the File Tree</h1>

  <br>

  When you want to actually edit a file, you can click or double click on it in the File Tree. The file will then open in a new tab in the text editor.
  
  <br>
  <br>

  <strong>After opening this lab with the "Open IDE" button, use the File Tree and click on the file <code>edit-me.txt</code> to open it.</strong>

  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/editme.png" style="display: block;" height="auto" width="auto"/>
  <br>

  <h1>4. Edit a File with the Text Editor</h1>
  
  <br>

  Once you've opened a file, the tab you see is the Text Editor that allows you to edit the contents of the file. This is where we do our programming and write our code. You open the files you want to edit in a tab in the text editor and can write code and save the file. Each tab gets the name of the file you are editing.
  
  <br>
  <br>

  <strong>If you've clicked on <code>edit-me.txt</code> as described in "Open a File from the File Tree, you should see a tab now with the title <code>edit-me.txt</code>. The file is totally empty. Go ahead and write anything in the file, <code>Hello World!</code>, your name, anything. To pass this lab all you need to do is not have a blank <code>edit-me.txt</code> file.</strong>
   
  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/helloworld.png" style="display: block;" height="auto" width="auto"/>
  <br>

  <h1>5. Saving a File</h1>
  
  <br>

  After you edit a file, you must save it. The file tab in the text editor will indicate if the file has been changed and not saved by putting a dot on the right corner of the tab. Once you're done editing a file, save it by pressing ⌘+S (Command and S at the same time) on a Mac, or Ctrl+S (Control and S at the same time) on Windows.

  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/notsaved.png" style="display: inline-block;" height="auto" width="auto"/>
   
  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/saved.png" style="display: inline-block;" height="auto" width="auto"/>
  <br>
  <br>

  Notice how after saving the file, the yellow dot disappears on the tab.
  
  <br>
  <br>
  
  At the bottom right of the IDE you will see a timestamp of when your work was last saved. Your work is being saved to the GitHub account that you connected to Learn. If at any point you want to access your work outside of Learn, go to your GitHub account. 
  
  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/lastsaved.png" style="display: block;" height="auto" width="auto"/>

  <br>
  
  If you save the file yourself, this will update to reflect the time at which you saved. The IDE is also auto saving (to your GitHub account) in the background. When the auto save occurs, the yellow dot on the text editor tab will disappear (even if you didn't manually save), and the timestamp at the bottom right will update. You should stay in the habit of manually saving your work, as having this habit will prepare you for working on a local environment, which will not auto save like the IDE does.

  <h1>6. Running a Command with Your Terminal</h1>
  
  <br>
  
  On the bottom of the IDE is a Terminal. This is your access point to your development environment that the Learn IDE provides. As a programmer, we use the terminal for a lot of tasks including actually running our code and programs and executing commands. You're going to learn a lot about how to use a Terminal, but for now, know that you can type certain commands into it. Let's try one, <code>ls</code> (the letter <code>L</code>, but lowercase, and the letter <code>S</code>, but lowercase). Click into the terminal, then type <code>ls</code> and press enter to execute the command.

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/ls-terminal.png" style="display: block"/>
  
  <br>
  <br>

  <code>ls</code> stands for list and it will list all the files in the directory, similar to the file tree. After you press enter you will see output from the terminal responding to the command you typed.
  
  <br>

  Try another one, from your terminal, type <code>pwd</code>, which stands for print working directory, which is the current directory the terminal is in.

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/pwd-terminal.png" style="display: block"/>
  
  <br>

  As you can see, the terminal is in the <code>first-ide-lab</code> directory which is the folder that contains this lab.

  <h1>7. Running Your Tests from Your Terminal</h1>
  
  <br>

  Now that you know how to run commands from your Terminal, the next step is to run the <code>learn</code> command. Each lab comes with a challenge or problem you need to solve by writing code, demonstrating that you understand the concepts and can implement them in your programs. Labs are "test driven", which means we include code in the lab that checks to see if the code you write correctly solves the challenge. To check your lab and run the tests, you type in <code>learn</code> in your terminal.
  
  <br>
  <br>

  The challenge of this lab is to edit the file <code>edit-me.txt</code>. When that file is empty, if you run <code>learn</code> from your terminal, you would see:

  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/learntestfail.png" style="display: block;" height="auto" width="auto"/>
  
  <br>

  This is a failing test, which is totally normal, all labs are failing until you make them pass. You can see that a test is failing from the output in the terminal, and the red light to the right of the IDE. When the test passes, the output in the terminal will show that the test passed, and the test light will turn green.
  
  <br>
  <br>

  You can see from the output in your terminal some information about why the lab is currently failing. You don't need to understand all of the test output but there will always be hints as to what you're suppose to do to solve the lab. For example:

  <pre class="highlight plaintext"><code class=" linenums prettyprint plaintext "><ol class="linenums"><li class="L0">First Lab:</li><li class="L1">  you made an edit to edit-me.txt (FAILED - 1)</li></ol></code></pre>

  <br>
  
  That's a pretty helpful message, the tests are telling you that you should have made an edit to <code>edit-me.txt</code>

  Once you edit <code>edit-me.txt</code> to contain any text and not be empty, if you re-run <code>learn</code> from your terminal, you would see:

  <img src="//s3-us-west-2.amazonaws.com/curriculum-content/onboarding/first-ide-lab/learntestpass.png" style="display: block;" height="auto" width="auto"/>
  
  <br>

  Notice that the <code>edit-me.txt</code> file has text in it and is saved. The tests now report in the terminal that everything is passing and there are no failures. The light to the right has turned green to reflect the passing test.
  
  <br>
  <br>

  <strong>To review: make sure you've edited <code>edit-me.txt</code> and added any text, saved the file, and then run <code>learn</code> from your terminal to see if your tests are passing.</strong>

  <h1>8. Submitting a Lab with <code>learn submit</code></h1>
  
  <br>

  The last step to completing a lab with the Learn IDE is to submit it. You can do this at anytime by typing <code>learn submit</code> in your terminal.

  <img src="//learn-co-videos.s3.amazonaws.com/learn-co-orientation/learn-submit.png" style="display: block;"/>

  <br> 
  
  If the tests are passing and the lab is submitted, all lights will turn green and you can move on to the next lesson.
  
  <br>
  <br>

  Congratulations, you've passed your first lab!!!

  <h2>Summary</h2>
  
  <br>

  For every lab, the workflow you will use to solve it is:
  
  <br>

  <h2>Summary</h2>
  
  <br>

  For every lab, the workflow you will use to solve it is:
  
  <br>

  1. Open the lab by clicking the "Open" button.
  
  <br>

  2. Read the README of the lab and get a sense of what the lab wants you to do.
  
  <br>

  3. Run the tests with <code>learn</code> from your terminal.
  
  <br>

  4. Open any files you need to edit using the File Tree.
  
  <br>

  5. Write code in the Text Editor that will satisfy the lab requirements.
  
  <br>

  6. Run the <code>learn</code> command in your Terminal as many times as you need to get feedback.
  
  <br>

  7. Once the tests are passing or even if you're just done for the day, submit the lab with <code>learn submit</code>.
  
  <br>

  8. If you ever get stuck, use "Ask a Question" to get help, don't be shy!
</div>

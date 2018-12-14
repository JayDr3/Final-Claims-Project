# Final-Claims-Project
This is the final project for the claims system. By: Teamabc-123
********************************************************************************************************************************
THIS, WITH SCREENSHOTS, CAN BE FOUND IN THE UserDocumentation_Teamabc-123.docx FILE.
********************************************************************************************************************************

How-To: Installing, Deploying and using Teamabc-123’s Claim System
By: Joey Drasal, Scott Guthier, Charles Lejtman and 
Matt Oberteuffer




GitHub Repository: https://github.com/JayDr3/Final-Claims-Project











1.The first step in getting the system up and running is to download XAMPP, which includes Apache and MySQL(the database). Note: I preferred to use the latest version, but any version will work. Make sure you download for YOUR operating system.

2.After you download and install XAMPP, unzip the claims.zip file into a directory of your choice. This will reveal the files/folders associated with this system.






3.Once unzipped, right click the folder name, on the top address bar of the folder, and click copy address.

4.After the address is copied, open command prompt and type ‘cmd /k “cd <paste here>” and hit enter (Note: Where it says <paste here>, this is where you either right click and paste or ctrl+v and paste the address). This will direct the command prompt to the correct folder.

5.After you redirect command prompt to the correct folder, type in ‘npm install’ This will extract the package.json file and should install all dependencies.

If this gives you issues/doesn’t successfully install, then you can type in these commands into command prompt: ‘npm install express express-fileupload body-parser mysql ejs req-flash --save’ hit enter. Then after done installing, type in ‘npm install nodemon -g’. These will give you the necessary dependency files.










6.Next, open up XAMPP Control Panel and click Start on Apache and MySQL. This will start up your database.

7.Now, click on Admin next to Stop on the MySQL line and it should bring up MyPHPAdmin in your browser.








8.Next, click on the Databases tab at the top, check all databases that you can. Then click ‘drop’. You will now see that the Databases are gone from the dashboard.

9.Click on the Import tab at the top of the dashboard. This will reveal a File to import option. Use the Choose File button to select the claimsdb.sql file inside the claims folder.





10.Back to phpMyAdmin, click Go at the bottom of the page.


11.Now, you should be able to see the database ‘socka’ and the table inside ‘claims’. Inside there, you should see entries. These are needed for testing purposes.

12.Next, go to back to Command Prompt. Type in: nodemon app.js
It should reveal that the host port is 5000.

13.Now, go to a web browser. Preferably Chrome or Mozilla Firefox or Apple’s equivalent. Chrome Version 71.0.3578.98 64-bit is used for this demonstration. 
Type in the address: localhost:5000. Hit enter. This will take you to the 		homepage of the claims app for admins. Here you will see the same database 	entries from phpMyAdmin, with options. Here you can click on three 	options(features): 

Option 1: Add a New Claim
Here you will see the form to add a new claim/person into the system and the form options, with more to be added and can be added as well. Once you add a claim, it will reveal the results in both the phpMyAdmin and the homepage of our claims admin app. 




Option 2: Edit a Claim
If you click on an entries’ edit button you can edit that claim. Anything can be edited besides the username. The username is unique, which is why it can’t be changed. Clicking the Update Claim button will make the change come true. 





Option 3: Deleting a Claim
At the homepage if you click the red Delete button next to an entry, you can delete the entire entry from your system.




Side Feature: At the top left of the windows, you can see Teamabc-123 Claims. If you click that, it will take you to the home tab.
If you go back to your claims folder, you can click on User_Reg.html and User_Login.html. They are early templates of what our user login/database login and user registration page is going to be. We are currently in the process of switching them to the Express Framework and will be adding hash and salt password security, as well as 2-factor authentication. The User Registration page also has a password requirements feature.




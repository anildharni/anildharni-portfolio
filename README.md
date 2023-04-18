Portfolio Site - Anil Dharni.

Your not deploying the project through github auto deploys. so you need to deploy the project through the firebase deploy each time.

we need to build our Next.js app by running the following command in your project directory:

npm run build
This will generate a production build of your Next.js app in a directory named "build".

Next, we need to install Firebase CLI using the following command:

npm install -g firebase-tools
This will install Firebase CLI globally on your system.

Once Firebase CLI is installed, you need to login to Firebase using the following command:

firebase login
This will open a browser window and ask you to login to your Google account. Once you are logged in, you can close the browser window.

Now, we need to initialize our Firebase project. Run the following command in your project directory:


firebase init
This will initialize a new Firebase project in your current directory. It will ask you a series of questions. Answer them as follows:

Select "Hosting" using the arrow keys and press Enter.
Select the Firebase project you created earlier and press Enter.
For the public directory, enter "build" (which is the directory where our Next.js app is built).
Choose "Yes" for configuring a single-page app.
Choose "No" for overwrite index.html.
Now, we need to deploy our app. Run the following command:


firebase deploy
This will deploy your Next.js app to Firebase Hosting. Once the deployment is complete, Firebase will give you a URL where you can access your app.
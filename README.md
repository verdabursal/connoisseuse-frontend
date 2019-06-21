# README from final project report

Connoisseuse is a web application that is, as of now, locally hosted. 

You will have to download the three components (the MySQL database with all its create schemas, the Java Spring Boot middle tier, and the React frontend application) and run them each individually. 

All of the files necessary to create the database and all its tables, as well as insert all of the initial data, can be found in the Spring Boot application, in the folder:

connoissuse-backend/src/main/resources/sql

I would recommend creating the database and then the tables in the following order:

		1. Users
		2. Varieties
		3. Countries
		4. Regions
		5. Bottles
		
After that, you should run the scripts to insert the varieties, countries, and then regions. 

Once you have the database set up, you can run the Spring Boot application. I have always run it from my IDE (IntelliJ) but you can really do this however you like. The port on which I run it is 8080, and thus my frontend application looks for the backend API at localhost:8080, so if yours is different it’s a quick fix: change “localhost:8080” in the file:

connoisseuse-frontend/src/config.js

**There is another file you must change in order to connect to the database:** 

connoisseuse-backend/src/main/resources/application.properties

There are places where you can specify a username and a password to connect to the database, so go ahead and fill in the necessary values for that.

Once your Spring Boot application is running, you can start the frontend. The way I start my React apps is by cd’ing into the connoisseuse-frontend directory from my command line, then running “npm start” on the command line. 

You can then click on “Home” to get started using the app.



# Official React documentation below.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

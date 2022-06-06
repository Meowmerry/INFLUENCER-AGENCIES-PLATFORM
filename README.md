#  ~  👋 INFLUENCER-AGENCIES-PROJECT-MongoDB ~  👋

## 🌱 Summary 🌱 

###🌱  INFLUENCER-AGENCIES-PROJECT-MongoDB 🌱

🌱 This project build Express on server, React on client by TypeScript 🌱

![Landing-Page](https://user-images.githubusercontent.com/50789325/170897457-b7b44016-eaec-4824-889f-2595435f64b2.png)



# Available Scripts
In the project directory, you can run:

# yarn start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

# yarn test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

# yarn run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

# yarn dev
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.





## Set-up / Install Backend
npm init -y

## MongoDB/mongoose?

MongoDB is the most popular non-relational database in use today. It is a document-oriented database that can store data in the form of documents, which are similar to objects in javascript. Instead of _tables_ in SQL, we have _collections_. Instead of _columns_ in SQL, we have _keys_. Instead of _rows_ in SQL, we have _documents_.

NoSQL databases like MongoDB are inherently more flexible than SQL databases as they do not need to follow a model. While a SQL table can only contain rows that conform to the specific schema of columns, collections in a NoSQL database can contain documents with different kinds of data that don't neatly fit into a schema. They may even contain arrays and objects that are nested.

Mongoose is a node module published on npm that not only provides a way to access a MongoDB database from a node server but also add a data schema to MongoDB collections. While not being beholden to a schema may be a feature of a NoSQL database, it can also be a cause of confusion and error if data is not organized in a predictable structure. Mongoose aims to solve that by letting developers create schemas and use models created off of that schema to interact with MongoDB.

Documentations for Mongoose can be found [here](https://mongoosejs.com/docs/guide.html).



## set up dependency
yarn add express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid chalk@^4.1.2 joi

yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D

## Set-up / Install Frontend

# Available Scripts
In the project directory, you can run:

# yarn dev
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

# yarn test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

# yarn run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

# yarn run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation. https://reactjs.org/
# Memory Card game  + TAILWIND FRAMEWORK

A retro pokemon themed memory game, it features over good few unique pokemon via PokeAPI. You can test your memory on this.

 👉 Visit game [here](https://memorygamekovalevskyi.netlify.app/)

## Getting Started

git clone `git@github.com:Firkax69/memoryCard-odin.git`

`cd memoryCard-odin/`

`npm install`

`npm start`
<br/>
<br/>

-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  
<br/>
<br/>

To set up follow the steps (to start new project):

Step 1: Clone the Repository
$ git clone <repository_url> 
$ cd <repository_folder_name>

Step 2: Create a Vite React App
$ npm create vite@latest my-first-react-app -- --template react

Step 3: Move the Created App to the Current Directory Using rsync
$ rsync -av --progress my-first-react-app/ . --exclude my-first-react-app

Step 4: Remove the Empty Directory
$ rm -rf my-first-react-app

Step 5: Install Dependencies
$ npm install

Step 6: Start the Development Server
$ npm run dev

-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  

Please note this code Styled with Tailwind CSS classes.

1. Install Tailwind CSS and its dependencies via npm: 
npm install -D tailwindcss postcss autoprefixer

2.  Generate the Tailwind configuration files:
npx tailwindcss init -p

This will create two files:

tailwind.config.js: The main configuration file for customizing Tailwind.
postcss.config.js: The PostCSS configuration file.

3. In the tailwind.config.js file, set up the content property to specify the paths to all of your template files:


4.  Add Tailwind's Base, Components, and Utilities to Your CSS
In your src directory, locate the index.css (or create it if it doesn't exist) and add the following lines:
@tailwind base;
@tailwind components;
@tailwind utilities;

5.  Run npm start



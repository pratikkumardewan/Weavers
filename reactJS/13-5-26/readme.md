React Project setup with tailwind css
We use vite instead react which is lighter version of react similar to express js for node.js

Create vite project first 

First: go to parent folder of project folder.
        Cd project_name

2nd: run this command to create vite project 
        npm create vite@latest my-project -- --template react
        (check in terminal if vite app is live in localhoast)
        (my-project -> you can name it any according to your project name)

3rd: cd my-project

4th: run this command to create tailwind.config.js
            npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

5th: then open tailwind.config.cs select everything remove everything and paste 
	“
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

”
6th: clean everything in index.css (/src/index.css) and paste bellow three lines 
	@tailwind base;
@tailwind components;
@tailwind utilities;



7th: run this command in project level “ npm run dev ”

8th: write our own jsx/html in app.jsx

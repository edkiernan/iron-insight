# iron-insight
## Website for the Iron Insight ML model
- Node.js and Express for building the server-side APIs
- React for building the client-side UI
- MongoDB for storing data
- ML model trained on (DATA)
### Node.js
- Server set up
- `npm init -y`
    - create pakage.json
- `npm install express mongoose body-parser cors`
    - install dependencies, creates `node_modules`
- Fill out `server.js` file
### React 
- Client-side UI
- `npm install react react-dom react-router-dom axios`
    - `react`: The main React library
    - `react-dom`: Provides DOM-specific methods that can be used at the top level of a web app to enable React to interact with the DOM
    - `react-router-dom`: Provides client-side routing for React applications
    - `axios`: A Promise-based HTTP client for the browser and node.js
- Create `client` in project directory
    - initialize a new React app by running `npx create-react-app .`
    - `npm start` start development server in `client`
- Edit `App.js` to sets up some basic routing for our React app using the `react-router-dom` library. We have three routes defined: `/`, `/about`, and `/account`.


import React from 'react'
 import  Navbar from './components/Navbar/Navbar.js'
 import  Upload from './components/Upload/Upload.js'
 import  AllVideos from './components/AllVideos/AllVideos.js'


 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function App() {
    return (
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

        <Route  exact path="/">
            
            <AllVideos />
          </Route>

          <Route path="/upload">
          <Upload />
          </Route>
       
        
        </Switch>
      </div>
    </Router>
    )
}

export default App

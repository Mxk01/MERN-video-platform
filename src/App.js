import React from 'react'
 import  Navbar from './components/Navbar/Navbar.js'
 import  Upload from './components/Upload/Upload.js'
 import  AllVideos from './components/AllVideos/AllVideos.js'
 import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
 import HomeIcon from '@material-ui/icons/Home';

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
        <nav style={{backgroundColor:"#2f3640",padding:'0.6rem'}}>
          <ul>
            <li  >
              <Link style={{color:"white",textDecoration:"none"}} to="/"><HomeIcon/></Link>
            </li>
            <li>
              <Link to="/upload" style={{color:"white",textDecoration:"none"}}><ArrowUpwardIcon/></Link>
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

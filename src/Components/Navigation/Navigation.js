import React from 'react';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";  
import './Navigation.css';  
import Home from '../../Pages/Home/Home'; 
import Contact from '../../Pages/Contact/Contact';

function Navigation(){
    return (
        <Router>
            <div>
                <nav>
                    <ul className="navigation">
                        <Link to='/'>
                            <li id="Im-Here">Home</li>
                        </Link>
                        <Link to='/About'>
                            <li>About</li>
                        </Link>
                        <Link to='/Contact'>
                            <li>Contact</li>
                        </Link>
                        <Link to='/Jobs'>
                            <li>Jobs</li>
                        </Link>
                    </ul> 
                </nav>
                <Switch>
                    <Route path='/'> 
                        <Home/>
                    </Route> 
                    <Route path='/About'> 
                        {/* <About/> */}
                    </Route>
                    <Route path='/Contact'> 
                        <Contact/>
                    </Route>
                    <Route path='/Jobs'> 
                        {/* <Jobs/> */}
                    </Route>
                </Switch>
            </div>
        </Router>
    ); 
} 

export default Navigation; 


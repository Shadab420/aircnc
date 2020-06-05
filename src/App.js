import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactGa from 'react-ga';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavigationBar from './components/navbar/NavigationBar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';

function App() {
  // useEffect(() => {
	
	// 	ReactGa.initialize('tracking-code')
		
	// 	//to report pageview
	// 	ReactGa.pageview(window.location.pathname + window.location.search)
	
  // }, [])
  
  return (
    <div className="App">
      <Router>
        <NavigationBar/>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
      
      
      
    </div>
  );
}

export default App;

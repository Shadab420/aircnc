import React, { useEffect } from 'react';
import ReactGa from 'react-ga';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavigationBar from './components/navbar/NavigationBar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  // useEffect(() => {
	
	// 	ReactGa.initialize('tracking-code')
		
	// 	//to report pageview
	// 	ReactGa.pageview(window.location.pathname + window.location.search)
	
  // }, [])
  
  return (
    <div className="App">
      <NavigationBar/>
      
      
    </div>
  );
}

export default App;

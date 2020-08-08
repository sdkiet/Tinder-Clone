import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'; 
import Chats from './Chats';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    {/*Header*/}
     
     <Router>
      
       <Switch>
         <Route path="/chats">
         <Header backButton="/"/>
           <Chats/>
         </Route>
         <Route path="/">
         <Header/>
           <TinderCards />
           <SwipeButtons />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

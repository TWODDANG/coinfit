import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import QrCode from './components/qrcode-generator';
import Scanner from './components/qrcode-scanner';
import Main from "./components/main";
import Navbar from "./components/navbar";
import Clublist from "./components/clublist";

function App() {
  return (
   <Router>
       <Navbar/>
       <br/>
       <div className='container'>
           <Route path='/' exact component={Main} />
           <Route path='/scan' component={QrCode}/>
           <Route path='/scanner' component={Scanner}/>
           <Route path='/clublist' exact component={Clublist} />
       </div>

   </Router>
  );
};

export default App;

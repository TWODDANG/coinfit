import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import QrCode from './components/qrcode-generator';
import Scanner from './components/qrcode-scanner'

function App() {
  return (
   <Router>
       <div className='container'>
           <Navbar />
           <br />
           <Route path='/' exact component={ExercisesList} />
           <Route path='/edit/:id' component={EditExercise}/>
           <Route path='/create' component={CreateExercise}/>
           <Route path='/user' component={CreateUser}/>
           <Route path='/scan' component={QrCode}/>
           <Route path='/scanner' component={Scanner}/>
       </div>

   </Router>
  );
}

export default App;

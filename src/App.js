import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


const App = () => {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Routes>
      <Route exact path="/" component={ExercisesList} />
      <Route exact path="/edit/:id" component={EditExercise} />
      <Route exact path="/create" component={CreateExercise} />
      <Route exact path="/user" component={CreateUser} />
      </Routes>
    </Router>
  )
}

export default App;

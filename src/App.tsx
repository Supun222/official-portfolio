import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import WorkStation from './pages/workstation/WorkStation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
       <Routes>
        <Route path='/workstation' element={<WorkStation />}></Route>
      </Routes> 
    </Router>
  );
}

export default App;
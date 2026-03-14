import HomePage from './Pages/HomePage';
import LecturerDashboard from './Pages/LecturerDashboard';
import StudentDashboard from './Pages/StudentDashboard';
import './style.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';



const App = () =>{
  return(
    <BrowserRouter>
    
            
            
    <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/student' element={<StudentDashboard/>}/>
      <Route path='/lecture' element={<LecturerDashboard/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
export default App;


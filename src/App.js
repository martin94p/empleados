
import './App.css';
//1ero llamo al estado importando 
// import { useSelector } from 'react-redux'; //useDispatch es para hacer algo en vez del selector que es para seleccionar o traer algo desde el estado.


import { BrowserRouter, Routes, Route} from 'react-router-dom';
import EmployeesForm from './components/EmployeesForm';
import EmployeesList from './components/EmployeesList';

function App() {
  // * modo prueba para poder visualizarlo const employeesState = useSelector(state => state.employees)
  // console.log(EmployeesState)


  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<EmployeesList/>} />
      <Route path='/create-employee' element={<EmployeesForm/>} />  
      <Route path='/edit-employee/:id' element={<EmployeesForm/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

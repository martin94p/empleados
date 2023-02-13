//import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //hook que se ejecuta primero
import { addEmployee} from './EmployeesSlice';
import  {v4 as uuid} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom';

function EmployeesForm() {
    
  const [employee, setEmployee] = useState({
    id:"",
    First_Name: "",
    Last_Name: "",
    Email:"",
    Hire_Date:"",
    Salary:"",
    Commission_PCT:"",
  });

  const dispatch= useDispatch() //ME VA PERMITIR DISPARAR EVENTOS DESDE EL SLICE
  const navigate= useNavigate()
  const params = useParams()
  const employees = useSelector(state => state.employees)
   //const stateEmployees = useSelector(state => state.employees); //lugar donde va estar todos los estados, cualquier componente va poder seguir accediendo
    //console.log(stateEmployees);
  const handleChange = (e) => {
    //console.log(e.target.name, e.target.value)
    setEmployee({
        ...employee,
        [e.target.name]:e.target.value,

        });
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(employee); para ver por consola el empleado
    dispatch(
      addEmployee({
       ...employee,
       id: uuid(), //voy a hacer una copia del empleado y le agregoo un id unico
      })
      );
     navigate('/');
       
  };
  useEffect(() => {
    if (params.id) {
      setEmployee(employees.find(employee => employee.id === params.id));
    }
   },[]);
      
    
   
    
return (
    <form onSubmit={handleSubmit}>
      <input name='id'
             type="text"
             placeholder="Nombre"
             onChange={handleChange}
             value={employee.id}
        />
      <input name='First_Name'
             type="text"
             placeholder="Nombre"
             onChange={handleChange}
             value={employee.First_Name}
        />
      <input name='Last_Name'
             type="text"
             placeholder="Apellido"
             onChange={handleChange}
             value={employee.Last_Name}
        />
      <input name='Email'
             type="text"
             placeholder="Email"
             onChange={handleChange}
             value={employee.Email}
        />
      <input name='Hire_Date'
             type="text"
             placeholder="Fecha de Contrato"
             onChange={handleChange}
             value={employee.Hire_Date}
        />
      <input name='Salary'
             type="text"
             placeholder="Salario"
             onChange={handleChange}
             value={employee.Salary}
        />
      <input name='Comission_PCT'
             type="text"
             placeholder="Comision"
             onChange={handleChange}
             value={employee.Commission_PCT}
        />
      <textarea name="description"
                placeholder="Informacion Extra"
                onChange={handleChange}>
       </textarea>
      <button>Guardar</button>
    </form>
   )
  
}

export default EmployeesForm
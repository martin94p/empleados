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
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sn p-4">
      <label htmlFor="title" className="block-text-sm font-bold">Empleado: </label>
      <input className="w-full p-2 rounded-md bg-zinc-600 mb-2" 
             name='id'
             type="text"
             placeholder="Nombre"
             onChange={handleChange}
             value={employee.id}
        />
      <label htmlFor="title" className="block-text-sm font-bold">Nombre: </label>
      <input className="w-full p-2 rounded-md bg-zinc-600 mb-2"
             name='First_Name'
             type="text"
             placeholder="Nombre"
             onChange={handleChange}
             value={employee.First_Name}
        />
      <label htmlFor="title" className="block-text-sm font-bold" >Apellido: </label>
      <input className="w-full p-2 rounded-md bg-zinc-600 mb-2"
             name='Last_Name'
             type="text"
             placeholder="Apellido"
             onChange={handleChange}
             value={employee.Last_Name}
        />
      <label htmlFor="title" className="block-text-sm font-bold">Email: </label>
      <input className="w-full p-2 rounded-md bg-zinc-600 mb-2"
             name='Email'
             type="text"
             placeholder="Email"
             onChange={handleChange}
             value={employee.Email}
        />
      <label htmlFor="title" className="block-text-sm font-bold">Fecha de Contratacion: </label>  
      <input className="w-full p-2 rounded-md bg-zinc-600 mb-2"
             name='Hire_Date'
             type="text"
             placeholder="Fecha de Contrato"
             onChange={handleChange}
             value={employee.Hire_Date}
        />
      <label htmlFor="title" className="block-text-sm font-bold">Salario: </label>
      <input className="w-full p-2 rounded-md bg-zinc-600 mb-2"
             name='Salary'
             type="text"
             placeholder="Salario"
             onChange={handleChange}
             value={employee.Salary}
        />
      <label htmlFor="title" className="block-text-sm font-bold">Porcentaje Comision: </label>  
      <input className="w-full p-2 rounded-md bg-zinc-600 mb-2"
             name='Comission_PCT'
             type="text"
             placeholder="Comision"
             onChange={handleChange}
             value={employee.Commission_PCT}
        />
      <textarea className="w-full p-2 rounded-md bg-zinc-600 mb-2" 
                name="description"
                placeholder="Informacion Extra"
                onChange={handleChange}>
       </textarea>
      <button className="bg-indigo-500 px-2 py-1">Guardar</button>
      <button className="bg-red-500 px-2 py-1">Cancelar</button>
    </form>
   )
  
}

export default EmployeesForm
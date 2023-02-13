import { useSelector, useDispatch} from 'react-redux';
import { deleteEmployee} from './EmployeesSlice';
import {Link} from 'react-router-dom';

function EmployeesList() {

   const employees = useSelector (state => state.employees);
   
   //console.log(employees);
   
   const dispatch = useDispatch()
  
   const handleDelete = (id) => {
        dispatch(deleteEmployee(id))
        
    }

   
   return (
    <div class='w-4/6'>
        <header className='flex justify-'> 
        <h1><c>Empleados Distinguidos!</c></h1>
        <Link to="/create-employee" 
        className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
        Crear Nuevo Empleado
        </Link>
        </header>
        
        <div className="grid grid-cols-3 gap-5">
        {employees.map(employee => (
            <div key={employee.id} className="bg-neutral-400 p-5 rounded-md">
                <header className="flex justify-between">
                <p>{employee.First_Name}</p>
                <p>{employee.Last_Name}</p>
                <p>{employee.Email}</p>
                <p>{employee.Hire_Date}</p>
                <p>{employee.Salary}</p>
                <p>{employee.Commission_PCT}</p>
                <div className="flex">
                <button onClick={() => handleDelete(employee.id)}>Eliminar</button>
                <Link to={`/edit-employee/${employee.id}`}>Editar</Link>       
                </div>
                </header>
            </div>
        ))}
        </div>            
    </div>
  )
}

export default EmployeesList


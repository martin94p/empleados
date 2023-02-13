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
    <div>

        <header>
            <h1>Distinguished Employees </h1>
        <Link to='/create-employee'>
        Crear Nuevo Empleado
        </Link>
        
        </header>
        
        {employees.map(employee => (
            <div key={employee.id}>
                <h3>{employee.First_Name}</h3>
                <p>{employee.Last_Name}</p>
                <p>{employee.Email}</p>
                <p>{employee.Hire_Date}</p>
                <p>{employee.Salary}</p>
                <p>{employee.Commission_PCT}</p>
                <button onClick={() => handleDelete(employee.id)}>Eliminar</button>
                <Link to={`/edit-employee/${employee.id}`}>Editar</Link>       
            </div>
        ))}
                
    </div>
  )
}

export default EmployeesList


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
    
    <div class='w-4/6' display="flex "justifyContent='center'>
        <h1><c>Empleados Distinguidos!</c></h1>
        <header className='flex justify-center'> 
        <h2>
        <Link to="/create-employee" 
        className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
        Crear Nuevo Empleado
        </Link></h2>
        </header>
        
        <div className="grid grid-cols-3 gap-5">
        {employees.map(employee => (
            <div key={employee.id} className="bg-neutral-400 p-5 rounded-md">
                <div >
                <header className="flex justify-between">
                <h4>{employee.First_Name}</h4>
                </header>    
                
                <p>{employee.Last_Name}</p>
                <p>{employee.Email}</p>
                <p>{employee.Hire_Date}</p>
                <p>{employee.Salary}</p>
                <p>{employee.Commission_PCT}</p>
                <button onClick={() => handleDelete(employee.id)}
                        class="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                        >Eliminar
                </button>
                <Link to={`/edit-employee/${employee.id}`}
                className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                >Editar</Link>       
                 
                
                 </div>       
            </div>
        ))};
        </div>            
    </div>
  )
}

export default EmployeesList


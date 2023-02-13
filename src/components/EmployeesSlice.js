// eliminar, actualizar , traer datos de un arreglo 
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: "1",
      First_Name: "Martin",
      Last_Name: "Perez",
      Email: "martin@vortexit.com",
      Hire_Date: "24/01/2023",
      Salary:"50.500",
      Commission_PCT:"0.5",
      completed: false 
       
    },
    {id: "2",
    First_Name: "Leandro",
    Last_Name: "Perez",
    Email: "lean@vortexit.com",
    Hire_Date: "25/01/2023",
    Salary: "49.500",
    Commission_PCT:"0.4",
    completed: false
    },
    {id: "3",
    First_Name: "Tomas",
    Last_Name: "Perez",
    Email: "tom@vortexit.com",
    Hire_Date: "22/02/2022",
    Salary: "55.500",
    Commission_PCT:"1",
    completed: false 

    },

]

export const EmployeesSlice =  createSlice({
name: 'employees',
initialState, //cuando queremos que arranque, queremos que inice con los estados, un arreglo u objeto por ej.
reducers: { //aca puedo poner cualquier funcion y llamarla desde cualquier lado
  addEmployee: (state, action) => {
    //console.log(state, action); con esto visualizo el state por consola
    state.push(action.payload) //anadio un nuevo objeto dentro del arreglo principal del state
  },
  editEmployee: (state, action) => {
    const {id, First_Name, Last_Name, Email, Hire_Date, Salary, Commission_PCT}= action.payload
    const employeeFind = state.find(employee => employee.id === id);
    if (employeeFind) {
      
      employeeFind.First_Name =First_Name;
      employeeFind.Last_Name =Last_Name;
      employeeFind.Email =Email;
      employeeFind.Hire_Date =Hire_Date;
      employeeFind.Salary =Salary;
      employeeFind.Commission_PCT=Commission_PCT;
    }
    },
    
    
   deleteEmployee:(state, action) => {
    const employeeFound = state.find(employee => employee.id === action.payload) //action.payload es el string a ubicar
    console.log(employeeFound)
    if (employeeFound )   { 
      state.splice(state.indexOf(employeeFound),1) //establezco que busque en la tabla de indices de empleados encontrados, y elimine la cantidad de cosas
    }   
  },
  


 //funciones para anadir actualizar
}
}
)



export const {addEmployee, deleteEmployee, editEmployee} = EmployeesSlice.actions   //estructuro para poder exportar como figura en documentacion counterslice
export default EmployeesSlice.reducer
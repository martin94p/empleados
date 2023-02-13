import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../components/EmployeesSlice';

export const store = configureStore({
//* aca si tengo varios archivos para que pueda acceder desde cualquier lugar    
    reducer: {
        employees: employeesReducer,
    }
    })


// para exportarlo debo tener un provider , que es una funcion que contiene a nuestra app, englobandola, de manera individual
// crear el reducer, seria como el SetState, operacion para modificar el estado, para crearlo desde redux toolkit va con el redux state slice
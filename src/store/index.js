import { combineReducers, createStore } from 'redux';
import { dayReducer } from './reducer/dayReducer';
import { taskReducer } from './reducer/taskReducer';



// export const store = createStore(productReducer);



const rootReducer = combineReducers({
    day: dayReducer,
    task: taskReducer
})

export const store = createStore(rootReducer);
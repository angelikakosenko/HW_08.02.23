const tasks = [
    {
        id:2,
        day: 'Mo',
        priority: 'importand',
        descr: 'kjnckjdsnckjdnc'
    }
];

export const taskReducer = (state = tasks, action) => {
    if (action.type === 'ADD_TASK') {
         
        return  [...state, action.payload]
    } 
    else if (action.type === 'DELETE_TASK')
        return state.filter(({id}) => id !== action.payload)
    else{
        return state
    }
}
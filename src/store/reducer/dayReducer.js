const day = [
    {
        id: 1,
        day: 'Mo'
    }
];

export const dayReducer = (state = day, action) => {
    if (action.type === 'ADD_DAY') {
         
        return  [...state, action.payload]
    } else if (action.type === 'DELETE_DAY')
        return state.filter(({id}) => id !== action.payload)
    else{
        return state
    }
}
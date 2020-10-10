
const listItems = [
    {
        item: "brush teeth",
        completed: false,
        id: 1
    },
    {
        item: 'take shower',
        completed: false,
        id: 2
    },
    {
        item: 'eat breakfast',
        completed: false,
        id: 3
    }
]

function itemReducer (state, action){
    switch(action.type){
        case 'add item':
            return [
                ...state,
                action.payload
            ]
        case 'mark complete':
            return (state.map((task) => {
                if (task.id === action.id){
                    task.completed = !task.completed;
                    return task
                } else {
                    return task
                }
            }))
        case 'remove completed':
            let newState = [];
            state.map((task) => {
                if (task.completed === false){
                    newState.push(task);
                }
            })
            return newState
        default:
            return state
    }
}

module.exports = {
    listItems,
    itemReducer
}


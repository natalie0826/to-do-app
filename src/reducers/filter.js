export const filter = (state = 'SHOW_ACTIVE', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload.filter;
        default:
            return state;
    }
};
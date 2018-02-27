export const loading = (state = false, action) => {
    switch (action.type) {
        case 'START_OR_FINISH_LOADING':
            return action.payload.isLoading;
        default:
            return state;
    }
};
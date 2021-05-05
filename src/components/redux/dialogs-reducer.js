const SEND_MESSANGE = 'SEND-MESSANGE';
const UPDATE_NEW_MESSANGE_TEXT = 'UPDATE-NEW-MESSANGE-TEXT';

const reducerDialogs = (state, action) => {
    switch (action.type) {
        case SEND_MESSANGE:
            let newMessange = {
                id: 7,
                messange: state.newMessangeText
            };
            state.messanges.push(newMessange);
            state.newMessangeText = '';
            return state;
        case UPDATE_NEW_MESSANGE_TEXT:
            state.newMessangeText = action.newText;
            return state;
        default:
            return state
    }
};

export const sendMessangeCreator = () => ({type: SEND_MESSANGE});
export const updateNewMessangeBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSANGE_TEXT, newText: text});

export default reducerDialogs;
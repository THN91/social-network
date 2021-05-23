const SEND_MESSANGE = 'SEND-MESSANGE';
const UPDATE_NEW_MESSANGE_TEXT = 'UPDATE-NEW-MESSANGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Taras'},
        {id: 2, name: 'Ksusha'},
        {id: 3, name: 'Roma'},
        {id: 4, name: 'Natasha'},
        {id: 5, name: 'Vlad'},
        {id: 6, name: 'Tanya'},
    ],
    messanges: [
        {id: 1, messange: 'hi'},
        {id: 2, messange: 'how are you?'},
        {id: 3, messange: 'what did you say?'},
        {id: 4, messange: 'ololo'},
        {id: 5, messange: 'wow'},
        {id: 6, messange: 'yo'},
    ],
    newMessangeText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSANGE:
            let newMessange = {
                id: 7,
                messange: state.newMessangeText
            };
            return {
                ...state,
                messanges: [...state.messanges, newMessange],
                newMessangeText: ''
            };
        case UPDATE_NEW_MESSANGE_TEXT:
            return {
                ...state,
                newMessangeText: action.newText
            };
        default:
            return state
    }
};

export const sendMessangeCreator = () => ({type: SEND_MESSANGE});
export const updateNewMessangeBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSANGE_TEXT, newText: text});

export default dialogsReducer;
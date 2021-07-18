const SEND_MESSANGE = 'SEND-MESSANGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSANGE:
            let newMessange = {
                id: 7,
                messange: action.messange
            };
            return {
                ...state,
                messanges: [...state.messanges, newMessange],
            };
        default:
            return state
    }
};

export const sendMessange = (newMessangeBody) => ({type: SEND_MESSANGE, messange: newMessangeBody});

export default dialogsReducer;
import reducerProfile from "./profile-reducer";
import reducerDialogs from "./dialogs-reducer";
import reducerSitebar from "./sitebar-reducer";

let store = {
    _state: {
        dialogPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, messange: 'hi', likesCount: 12},
                {id: 2, messange: 'how are you?', likesCount: 11},
                {id: 3, messange: 'blabla', likesCount: 9},
                {id: 4, messange: 'what did you say?', likesCount: 20},
            ],
            newPostText: ''
        },
        sidebar: {
            friends: [
                {name: 'Vlad'},
                {name: 'Dima'},
                {name: 'Vitalic'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = reducerProfile(this._state.profilePage, action);
        this._state.dialogPage = reducerDialogs(this._state.dialogPage, action);
        console.log(reducerDialogs(this._state.dialogPage, action));
        this._state.sidebar = reducerSitebar(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
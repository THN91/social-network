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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                messange: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
        if (action.type === 'ADD-MESSANGE') {
            let newMessange = {
                id: 7,
                messange: this._state.dialogPage.newMessangeText
            };
            this._state.dialogPage.messanges.push(newMessange);
            this._state.dialogPage.newMessangeText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSANGE-TEXT') {
            this._state.dialogPage.newMessangeText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
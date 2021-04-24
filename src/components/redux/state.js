let state = {
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
        ]
    },
    profilePage: {
        posts: [
            {id: 1, messange: 'hi', likesCount: 12},
            {id: 2, messange: 'how are you?', likesCount: 11},
            {id: 3, messange: 'blabla', likesCount: 9},
            {id: 4, messange: 'what did you say?', likesCount: 20},
        ]
    },
    sidebar: {
        friends: [
            {name: 'Vlad'},
            {name: 'Dima'},
            {name: 'Vitalic'}
        ]
    }
}

export default state;
import {rerenderEntriTree} from "../../render";

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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        messange: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntriTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntriTree(state)
}

export let addMessange = () => {
    let newMessange = {
        id: 7,
        messange: state.dialogPage.newMessangeText
    }
    state.dialogPage.messanges.push(newMessange)
    state.dialogPage.newMessangeText = ''
    rerenderEntriTree(state)
}

export let updateNewMessangeText = (newText) => {
    state.dialogPage.newMessangeText = newText
    rerenderEntriTree(state)
}

export default state;
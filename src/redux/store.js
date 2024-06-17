import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, postName: 'Post 1', userName: 'John', message: 'Hi', likesCount: 20, comments: 4 },
                { id: 2, postName: 'Post 2', userName: 'Mike', message: 'How is your day?', likesCount: 20, comments: 4 },
                { id: 3, postName: 'Post 3', userName: 'Alex', message: 'What is your name?', likesCount: 20, comments: 4 },
                { id: 4, postName: 'Post 4', userName: 'Lana', message: 'What is your name?', likesCount: 20, comments: 4 },
            ],

            newPostText: ''
        },

        messagesPage: {
            dialogsData: [
                { name: 'Mark', id: 1 },
                { name: 'Ann', id: 2 },
                { name: 'Alex', id: 3 },
                { name: 'Victor', id: 4 },
                { name: 'John', id: 5 },
                { name: 'Jane', id: 6 },
            ],

            messagesData: [
                { message: 'Hi', id: 1 },
                { message: 'How is your day?', id: 2 },
                { message: 'What is your name?', id: 3 },
                { message: 'What is your name?', id: 4 },
                { message: 'What is your name?', id: 5 },
                { message: 'What is your name?', id: 6 },
            ],

            newMessageText: '',
        },

        sidebar: {
            friendsData: [
                { name: 'Mark', id: 1 },
                { name: 'Ann', id: 2 },
                { name: 'Alex', id: 3 },
            ],
        },
    },

    _callSubscriber() {
        console.log('state')
    },



    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },



    addPost() {
        let newPost = {
            id: 5,
            postName: 'Post 5',
            userName: 'Vlad',
            message: this._state.profilePage.newPostText,
            likesCount: 0,
            comments: 0
        }
    
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
    
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },



    sendMessage() {
        let newMessage = {
            message: this._state.messagesPage.newMessageText,
            id: 6
        }
    
        this._state.messagesPage.messagesData.push(newMessage)
        this._state.messagesPage.newMessageText = ''
    
        this._callSubscriber(this._state)
    },
    
    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText
        this._callSubscriber(this._state)
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    } 
}

export default store;

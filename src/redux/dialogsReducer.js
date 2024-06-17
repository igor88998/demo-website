const SEND_MESSAGE = 'network/dialogs/SEND_MESSAGE';

let initialState = {
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
    ],
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE: 
			let newMessage = {
				message: action.newMessageText,
				id: 6,
			};

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }
            
		default:
			return state;
	}
};

export const sendMessageActionCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })

export default dialogsReducer;

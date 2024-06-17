import profileReducer, {
    addPostActionCreator,
    setUserProfile,
    toggleIsFetching,
} from './profileReducer';

let initialState = {
    postsData: [
        { id: 1, postName: 'Post 1', userName: 'John', message: 'Hi', likesCount: 20, comments: 4 },
        { id: 2, postName: 'Post 2', userName: 'Mike', message: 'How is your day?', likesCount: 20, comments: 4 },
        { id: 3, postName: 'Post 3', userName: 'Alex', message: 'What is your name?', likesCount: 20, comments: 4 },
        { id: 4, postName: 'Post 4', userName: 'Lana', message: 'What is your name?', likesCount: 20, comments: 4 },
    ],
    profile: null,
    status: '',
};

test('should add a new post', () => {
    // Arrange
    let action = addPostActionCreator('New post text');

    // Act
    let newState = profileReducer(initialState, action);

    // Assert
    expect(newState.postsData.length).toBe(5);
    expect(newState.postsData[4].message).toBe('New post text');
    expect(newState.postsData[4].likesCount).toBe(0);
});

test('should set user profile', () => {
    // Arrange
    let action = setUserProfile({ id: 1, name: 'John Doe' });

    // Act
    let newState = profileReducer(initialState, action);

    // Assert
    expect(newState.profile).toEqual({ id: 1, name: 'John Doe' });
});

test('should toggle isFetching', () => {
    // Arrange
    let action = toggleIsFetching(true);

    // Act
    let newState = profileReducer(initialState, action);

    // Assert
    expect(newState.isFetching).toBe(true);
});
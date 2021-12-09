import gql from 'graphql-tag';

//graphQL mutation query that will be executed by Apollo Client and will add a new user
export const ADD_USER =gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}`;

//graphQL mutation query that will be executed by Apollo Client and will log in
export const LOGIN_USER =gql`
mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
        }
    }
}`;

//graphQL mutation query that will be executed by Apollo Client, it will be called saveBook and it will add a new book to the database
export const SAVE_BOOK =gql`
mutation saveBook($input: savedBook!) {
    saveBook(input: $input) {
        _id
        username
        email
        bookCount
        savedBooks {
            # _id
            bookId
            authors
            link
            description
            bookId
            image
            title
        }
    }
}`;

//graphQL mutation query that will be executed by Apollo Client, it will be called removeBook and will delete a book from the database
export const REMOVE_BOOK =gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            # _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
}`;
const ADD_ARTICLE = "ADD_ARTICLE";
const ADD_USER = "ADD_USER";

const addUser = (userId) => ({ type: ADD_USER, payload: userId });
const addArticle = ({ title, userId }) => ({ type: ADD_ARTICLE, payload: { title, userId }});

export { ADD_ARTICLE, ADD_USER, addArticle, addUser };

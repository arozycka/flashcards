import {connect} from "react-redux";
import Articles from "../components/Article/Articles";
import {addArticle} from "../redux/actions"

const mapState = (state)=>({
    users: state.users,
    articles: state.articles
})
const mapDispatch = (dispatch)=>({
    onAdd: ({ userId, title })=>dispatch(addArticle({ userId, title }))
})

export default connect(mapState,mapDispatch)(Articles);

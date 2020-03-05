import React, {Component} from "react";


class ArticleInput extends Component{
    state = {
        title: "",
        userId: "jan"
    }
    onInputChange = (e)=>{
        this.setState({title:e.target.value})
    }
    onSelectChange = (e)=>{
        this.setState({userId:e.target.value})
    }

    handleClick = ()=>{
        console.log(this.state);
        this.props.onArticleAdd(this.state)
    }

    render(){
        return (
            <div>
                <input value={this.state.title}  onChange={this.onInputChange}/>
                <select value={this.state.userId} onChange={this.onSelectChange}>
                    { Object.keys(this.props.users).map((user) => <option key={user}>{user}</option>) }
                </select>
                <button onClick={this.handleClick}>Dodaj artykuł</button>
            </div>
        )
    }
}


export default ArticleInput;

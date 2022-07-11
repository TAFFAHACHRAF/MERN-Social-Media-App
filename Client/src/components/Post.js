import React from "react";
import { Component } from "react";

export default class Post extends Component{
    // constructor(){
    //     super()
    //     this.state({
    //         title : 'title',
    //         description : 'description'
    //     })
    //     this.select = this.select.bind(this)
    //     this.delete = this.delete.bind(this)
    // }
    state = {
        title : 'title',
        description : 'description'
    }

    select(){
        const url = "http://localhost:3000/posts/62cb9ccd76886ef795ab236e"
        const response = fetch(url)
        const data = response.json()
        console.log(data)
        // this.setState({
        //     title : data.title,
        //     description : data.description
        // })
    }

    delete() {
        const url = "http://localhost:3000/posts/62c5c7fb176a443bf5ddbff8"
        fetch(url, { method: 'DELETE' })
            .then(() => console.log("its deleted"));
    }

    render(){
        return(
            <div>
                <h1 onClick={this.delete}>Title : {this.state.title} </h1>
                <h1 onClick={this.select}>Desciption : {this.state.description}</h1>
            </div>
        )
    }

}

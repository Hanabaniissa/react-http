import React, {Component} from 'react';
import axios from "axios";

class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            userId: '',
            title: '',
            body: '',
            errorMsg: ''
        }

    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    submitHandler = e => {
        // preventDefault() -> Clicking on a "Submit" button, prevent it from submitting a form/ prevent refresh the page
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',
            this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error sending data'})
            })

    }

    render() {
        const {userId, title, body, errorMsg} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Fill the box bellow</label>
                    <div>
                        <label>Title </label>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="body">Body </label>
                        {/*<textarea id="body" required rows={3} onChange={this.changeHandler}/>*/}
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>UserId </label>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {errorMsg? <p>{errorMsg}</p>:null}
            </div>


        );
    }
}

export default PostForm;
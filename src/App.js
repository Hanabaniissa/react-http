import './App.css';
import AddFiles from "./components/AddFiles";
import Post from "./components/function/Post";
import React from "react";
import {createContext} from "react";
import PostForm from "./components/PostForm";


function App() {
    const style = {
        marginBottom: '50px',
        marginTop: '50px'
    }
    const fruit = ['apple', 'banana', 'orange'];
    return (
        <div className='App'>
            {/*<div style={style}><PostForm /></div>*/}
            {/*<AddFiles/>*/}
            {/*<Post/>*/}
            <Post />

            {/*<PostList/>*/}
            {/*<hr></hr>*/}
            {/*{*/}
            {/*    fruit.length ?*/}
            {/*        fruit.map((item) => <p>{item}</p>) : null*/}
            {/*}*/}
        </div>
    );
}

export default App;

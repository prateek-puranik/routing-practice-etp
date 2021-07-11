import React from 'react'

 function Welcome(props){
     function handleClick(){
         props.history.push('/')
     } 
    console.log(props);
    return (
        <div>
        <h1>
            Welcome {props.match.params.username}-You are at  {window.location.pathname}
            <br/>
            </h1>
            <button onClick={handleClick}>Home Page</button>
            </div> 
     
    )
}
export default Welcome

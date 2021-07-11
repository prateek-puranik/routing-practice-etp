import React from "react"
import Profile from "./components/Profile"
import Home from "./components/Home"
import About from "./components/About"
import Error from "./components/404"
import Welcome from './components/Welcome'
import User from './components/User'
import "./App.css"

import { Route,Switch ,Link, Redirect} from "react-router-dom"

function App() {
  
  return (
    <div className="App">
      
     
      
      
      <Route exact path="/" ><Home/></Route>
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/" render={() => <h1>Home Page using render</h1>} />
      <Route path="/welcome/:username" component={Welcome}/>
      
      
    </div>
  )
}

export default App
{/*<Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about1" component={Profile} />
      </Switch>*/
      /*<Route path="/(home|users|contact)/" component={Home} />*/
 /*<Route component={Error}/>*/ 
/* <Route path="/" render={() => <h1>Home Page using render</h1>} />*/

/*<Route path="/"><Home/><Route/> */

/* <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/profile">Profile</a></li>
      </ul>*/

/*<ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/profile">Profile</Link></li>
</ul>*/

/*basename="/admin"*/

/*const isLoggedIn=false;
<li><Link to="/user">User</Link></li>
<Route path="/user">{isLoggedIn?<User/>:<Home/>}</Route>*/

/*<Route path="/welcome/:username" component={Welcome}/>*/

/*<li><Link
  to={{
    pathname: "/welcome",
    search: "?sort=name",
    
    state: { notification: true }
  }}
>Welcome</Link></li>*/

}
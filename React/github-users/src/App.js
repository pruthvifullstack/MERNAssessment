import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import UserList from './Components/UsersList' 
import { Switch,Route,Redirect } from 'react-router-dom'
import UserDetail from './Components/UserDetail';


 function Search() {
  const [userData, setuserData] = useState();
  const textInput = React.createRef()

useEffect(() => {
  localStorage.clear()
}, [])

  const handleSearch = async () =>{
    const url = `https://api.github.com/search/users?q=${textInput.current.value}`
    await axios.get(url)
    .then((users)=>{
      const allusers = users.data
      setuserData(allusers)
      console.log(allusers)
    });
  }

  return (
    <div>
      <div className="App">
      <h4>GITHUB users</h4>
      <input type="text" placeholder="Search by name"  ref={textInput}/>
      <button onClick={handleSearch}>Search</button>
    </div>
    <div className="new">
      <UserList users={userData} />  
    </div>
    </div>
  )
}

export default function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Search}/>
      <Route path="/userdetails" component={UserDetail} />
      <Redirect to="/"/>
    </Switch>
    </>
  );
}

 

import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Component.css'
import { useHistory } from 'react-router-dom'

export default function UserList(props) {
    //check if user exists
    const history = useHistory()
    const {users} = props

    
    if(!users || users.length ===0 ){
        return <h2>no users found!!!</h2>
    } 

    const handleViewProfile = async (user) =>{
        const userDetail = await axios.get(`https://api.github.com/users/${user}`)
        localStorage.setItem('name',userDetail.data.login)
        localStorage.setItem('img',userDetail.data.avatar_url)
        history.push('/userdetails')
    }

    return (
        <div> 
            <div className="container">  
            {
                users.items.map((user)=>{
                    return(
                        <div className="user-card"  >
                            <img src={user.avatar_url} className="avatar-img" height="100px" width="100px"/>
                            <div className="card-data">
                                <p>ID: {user.id}</p>
                                <p>{user.login} </p>
                                <button onClick={()=>{handleViewProfile(user.login)}}></button>
                            </div>
                        </div>
                    )
                })
            }                   
            </div> 
        </div>
    )
}




















            {/* <h3>List of GitHUB Users : (total :{users.total_count})</h3>   */}
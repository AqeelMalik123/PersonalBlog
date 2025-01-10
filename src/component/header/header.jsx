import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../container/Container'
import LogoutBtn from './LogoutBtn'

export default function header() {
    const authStatus=useSelector((state)=>state.auth.status)
    const nagivate=useNavigate()
    const navItem=[
        {
            name:"Home",
            slug:"/",
            active:true,
        },
        {
            name:"Login",
            slug:"/Login",
            active:!authStatus,
        },
        {
            name:"Signup",
            slug:"/Signup",
            active:!authStatus,
        },
        {
            name:"All Posts",
            slug:"/All-Posts",
            active:authStatus,
        },
        {
            name:"Add Posts",
            slug:"/Add-Posts",
            active:authStatus,
        },

    ]
  return (
    <div>
        <Container>
            <nav>
                <div>
                    <Link to={'/'}>
                    Logo
                    </Link>
                </div>
            </nav>
            <ul>
                {navItem.map((item)=>item.active ? <li key={item.active}>
                    <button onClick={()=>{nagivate(item.slug)}}>{item.name}</button></li> :null)}
                    {authStatus && <li>
                        <LogoutBtn></LogoutBtn>
                    </li>

                    }
            </ul>
        </Container>
    </div>
  )
}

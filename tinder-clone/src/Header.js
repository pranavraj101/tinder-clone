import React from 'react'
import "./header.css"
import Person4Icon from '@mui/icons-material/Person4';
import ForumIcon from '@mui/icons-material/Forum';


function Header(){
    return <div className="header">
            <Person4Icon fontSize ="large" className="header_icon"/>


        <img className='header_logo' src="https://static.vecteezy.com/system/resources/previews/021/460/424/original/tinder-logo-transparent-free-png.png"></img>


            <ForumIcon fontSize='large' className='header_icon'/>

    </div>
}

export default Header

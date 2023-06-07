import React from 'react'
import "./header.css"
import Person4Icon from '@mui/icons-material/Person4';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header(){
    return <div className="header">
        <IconButton>
            <Person4Icon fontSize ="large" className="header_icon"/>
        </IconButton>

        <img className='header_logo' src="https://static.vecteezy.com/system/resources/previews/021/460/424/original/tinder-logo-transparent-free-png.png"></img>

        <IconButton>
            <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>
    </div>
}

export default Header

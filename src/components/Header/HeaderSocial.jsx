import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'

const headerSocial = () => {
    return (
        <div className='header_social'>
            <a href="https://www.linkedin.com/in/garrett-marshall-4b67629b/" target="_blank"> <BsLinkedin/> </a>
            <a href="https://github.com/GMMarshall27" target="_blank"><FaGithub/></a>
        </div>
    )
}

export default headerSocial

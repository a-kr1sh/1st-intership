import React from 'react'

function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Keeper Copyright ⓒ {year}</p>
        </footer>
    )
}

export default Footer;
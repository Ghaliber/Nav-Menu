import React from 'react';


const NavBar = (props) => {
    return (
        <ul className='nav-bar'>
            {props.items.map((el, i) => (
                <li className='drop-it-down'  key={i}>
                <a className= {el.active ? 'active' : undefined  } href={el.link}> {el.text}</a>
            {el.list ? <ul className='sub-menu'> {el.list.map((el, i)=> <li   key={i}><a className='sub-menu-item' href={i}>{el}</a></li>)} </ul> : null}
                </li>
            ))}

        </ul>



    )
}
export default NavBar
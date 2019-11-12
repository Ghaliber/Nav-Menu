import React from 'react';
import './App.css';
import NavMenu from './NavMenu'
const nav = [
  {
    text: 'Home',
    link: '#1',
    active:true,
    
  },
  {
    text: 'Services',
    link: '#2',
    active: false,
    list: ['For entrepreneurs', 'For students','For hobbyists']
  },
  {
    text: 'Contact',
    link: '#3',
    active: false,
    
  }
]


function App() {
  return (
  <div>
    <NavMenu items={nav}  />

  </div>
   
  )
}

export default App;

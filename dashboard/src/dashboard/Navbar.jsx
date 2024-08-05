import React from 'react'
import "./Navbar.css"
/*import UilReact from '@iconscout/react-unicons/icons/uil-react'
import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core"*/
function Navbar() {
  return (
    <div className='navbar'>
      {}
      <div className='brand-name'>
        <h1>GLOWING FLAME</h1>
      </div>
        
        <div className='menu'>
          <ul>
          <div className='menuitems'>
           <li><a href ="/">
              Dashboard
            </a></li> 
          </div>
          <div className='menuitems'>
           <li> <a href="./Products">
              Products
            </a></li>
          </div>
          <div className='menuitems'>
          <li> <a href="./Employees">
              Employees
            </a> </li>
          </div>
          <div className='menuitems'>
          <li> <a href="./Customers">
              Customers
            </a></li>
          </div>
          <div className='menuitems'>
          <li> <a href="./Orders">
              Orders
            </a></li>
          </div>
          <div className='menuitems'>
          <li> <a href="./Market Needs">
              Market Needs
            </a></li>
          </div>
          <div className='menuitems'>
          <li> <a href="./Finance">
              Finance
            </a></li>
          </div>
          <div className='menuitems'>
          <li> <a href="./Economic">
              Economic
            </a></li>
          </div>
          <div className='menuitems'>
          <li> <a href="./LogOut">
              Log Out
            </a></li>
          </div>
          </ul>
        </div>
    </div>
  )
}

export default Navbar

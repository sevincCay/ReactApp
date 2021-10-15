import React from 'react'
import logo from '../image/logo.svg'

function Footer() {
    return (
        <div class="justify-content-center">
           <nav className="navbar justify-content-center navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   
    
    <div className="collapse navbar-collapse" id="navbarNav">
    
      <ul className="navbar-nav ms-auto me-auto">
          <li className="nav-item"><a className="navbar-brand" href="#">
    <img src={logo} alt="" width="40" height="34"></img>
    </a></li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Footer

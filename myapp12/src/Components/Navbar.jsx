import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid  p-3">
        <a href="#" className="navbar-brand "><h2 className='font-weight-bold'>Yummy.</h2></a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon">
            {/* <div class="navbar-nav">
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">About</a>
                <a href="#" class="nav-item nav-link">Menu</a>
                <a href="#" class="nav-item nav-link">Events</a>
                <a href="#" class="nav-item nav-link">Chefs</a>
                <a href="#" class="nav-item nav-link">Gallery</a>

                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Inbox</a>
                        <a href="#" class="dropdown-item">Sent</a>
                        <a href="#" class="dropdown-item">Drafts</a>
                    </div>
                </div>
                <a href="#" class="nav-item nav-link " >Contacts</a>
            </div>
             */}


            </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">About</a>
                <a href="#" class="nav-item nav-link">Menu</a>
                <a href="#" class="nav-item nav-link">Events</a>
                <a href="#" class="nav-item nav-link">Chefs</a>
                <a href="#" class="nav-item nav-link">Gallery</a>

                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Inbox</a>
                        <a href="#" class="dropdown-item">Sent</a>
                        <a href="#" class="dropdown-item">Drafts</a>
                    </div>
                </div>
                <a href="#" class="nav-item nav-link " >Contacts</a>
            </div>
            <div class="navbar-nav ms-auto">
            <button className='rounded-pill btn ' style={{ backgroundColor: '#ce1212' }}>
            <a href="#" class="nav-item nav-link" style={{ color: 'white' }} >Book a Table</a></button>
            </div>
        </div>
    </div>
</nav>

   </>
  )
}

export default Navbar

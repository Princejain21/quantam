import React from 'react'
import './nav.css'
export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg w-100 navbar-dark bg-primary">
            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav container">
                    <li className="nav-item ">
                        <a className="nav-link border-right border-white " href="#foo">  
                         <i className="fa fa-clock-o mr-2" ></i>
                         <u className=' '>what are 24/7 </u> 
                         </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#foo"><span className='mx-1'>&#9993;</span>mail@gmail.com</a>
                    </li>
                    <li className="nav-item mt-2" id='icons'>
                        <i className="fa fa-twitter" ></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-facebook-f"></i>
                        <i className="	fa fa-envelope"></i>
                        <i className=" fa fa-light fa-clock-three-f" style={{ color: "red" }}></i>
                    </li>


                </ul>
            </div>
        </nav>
    )
}

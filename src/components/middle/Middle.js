import React from 'react'
import './middle.css'

export default function Middle() {
    return (
        <div className='container my-3'>
            <div className='row'>
                <div className='col col-sm-4 '>
                    
                    <h3><i className="fa fa-square-o border mx-1" ></i> Bisnes</h3>
                </div>
                <div className=' col col-sm-6 ml-auto'>
                    <ul className='list-group justify-content-end text-white flex-sm-row'id='list'>
                        <li><a href='#f' className='text-dark '>Home</a></li>
                        <li><a href='#f' className='text-dark '>About</a></li>
                        <li><a href='#f' className='text-dark '>Project</a></li>
                        <li><a href='#f' className='text-dark '>Blog</a></li>
                        <li><a href='#f' className='text-dark '>Service</a></li>
                        <li><a href='#f' className='text-dark '>Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

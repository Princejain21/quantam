import React from 'react'
import './Middle1.css'

export default function Middle1() {
    return (
        <div className='row container m-auto  py-5'>
            <div className='col-6 m-auto justify-content-center '>
                <h1 className='text-center text-secondary'>Our Services</h1><br />
                <p className='pb-5'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet illum ullam fugit illo laudantium sequi libero ea maxime magnam est.</p>
            </div>
            <div className='w-100'></div>
            <div className='col-12'>
                <div className='row justify-content-center'>
                <div className=' col col-3 mx-4 text-center  box'>
                <i className="fa fa-twitter  w-50 logoe " ></i><br />
                <h5 className='text-center'>Financial Consulting</h5><br />
                <p className='text-start'>hey Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet illum ullam fugit illo laudantium sequi libero ea maxime magnam est.</p>
            </div>
            <div className=' col col-3 mx-4 text-center  box'>
                <i className="fa fa-car  w-50 logoe" ></i><br />
                <h5 className='text-center'>Content Marketing</h5><br />
                <p className='text-start'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet illum ullam fugit illo laudantium sequi libero ea maxime magnam est.</p>
            </div>
            <div className=' col col-3 mx-4 text-center  box'>
            <i className="fa fa-shopping-cart w-50  logoe"></i>
                <h5 className='text-center'>Finance Advice</h5><br />
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet illum ullam fugit illo laudantium sequi libero ea maxime magnam est.</p>
            </div>
                </div>
            </div>
        
            <div className='col-2 my-5 mx-auto'>
                <button className=' ml-2 btn  btn-primary'>All Services</button>
            </div>
        </div>
    )
}

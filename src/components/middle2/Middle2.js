import React from 'react'
import './Middle2.css'
import image from '../../images/girl-boy.jpg'
import image1 from '../../images/blurd_image.jpg'

export default function Middle2() {
    return (
        <  >
            <div className='row middle justify-content-center'>
                <div className='col col-md-4 my-auto px-3'>
                    <p>Ki Name Dhake Bolbo Tomake</p><br />
                    <h1 className='font-weight-bold'>We are consulting for your buisness finance</h1><br />
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eius quae itaque? Perferendis, cupiditate ab!</p><br />
                    <button className='btn btn-primary text-white'>start now</button>
                </div>
                <div className='col col-md-4 align-self-center'>
                    <img src={image} alt='please wait' className='img-fluid' id='img' /> </div>
            </div>
            <div className='row  py-5  justify-content-center align-items-stretch mt-5'>
                <div className='col col-md-4 my-auto px-3'>
                    <h1 className='font-weight-bold text-capitalize'>We have many year experience in consuntent buisness</h1><br />
                    <p className='text-secondary'>  Lorem ipsum dolor sit amet consectetur asoluptatibus debitis maiores, laboriosam quas id ad suscipit cumque cum, aliquam perferendis dolorum hic corrupti, culpa optio ducimus. Libero quam veniam quis!</p><br />
                    <button className='btn btn-primary text-white'>start now</button>


                </div>
                <div className='col col-md-4 align-self-center'>
                    <img src={image1} alt='please wait' className='img-fluid img-thumbnail' /> </div>
            </div>
            <div className='row justify-content-center'>
                 <div className='col col-sm-2 m-2 font-weight-bold text-center'>
                     <i className="fa fa-gears "></i><br/>
                     <p>Construct<span className='text-muted'>ion</span></p>
                     </div>
                <div className='col col-sm-2 m-2 font-weight-bold text-center'>
                    <span>&#9729;</span><br />
                    <p>DUMMY-<span className='text-muted'>LOGO</span></p>

                </div>
                <div className='col col-sm-2 m-2 font-weight-bold text-center'>
                    <i className='fa fa-car'></i><br/>
                    <p><span className='text-muted'>Random</span>Logo</p>
                    </div>
                <div className='col col-sm-2 m-2 font-weight-bold text-center'>
                    <i className='fa fa-wrench'></i><br/>
                    <p><span className='text-muted'>Random</span>Brand</p>
                    </div>
            </div>

        </>
    )
}

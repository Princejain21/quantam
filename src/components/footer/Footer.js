import React from 'react'
import './footer.css'

export default function Footer() {
  return (
      <footer>
          <div className='row container py-5 m-auto'>
                <div className='col col-sm-6 justify-content-center text-white'>
                <h1>Subscribe Our Newsletter For More Update</h1><br/>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim, blanditiis architecto provident illum ut similique facilis delectus laudantium ipsum, aut consequuntur ad, commodi error!</p>
                </div>
                <div className='col col-sm-4 ml-2'>
                    <form>
                        <div className='form-group'>
                            <input className='form-control border w-100 border-white' type="email" placeholder='Enter Your Mail'/><br/>
                            <button className='btn btn-primary text-white p-2' id='btn'>Subscribe</button>
                        </div>
                    </form>

                </div>
          </div>

      </footer>
    
  )
}

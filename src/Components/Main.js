import React from 'react'
import pic from './pic.jpg'

export default function Main() {
  return (
    <div>
        <div className="container my-5" >
      <div className="row">
        <div className="col">
          <div>
            <img src={pic} style={{width:"500px",height:"550px"}}></img>
          </div>
        </div>
        <div className="col">
          <div className="form-floating mb-3" >
            <input type="name"  className="form-control" id="floatingInput" placeholder="Your name" />
            <label for="floatingInput" >Your Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="tel" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Mobile Number</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style={{ height: "100px" }} ></textarea>
            <label for="floatingTextarea2Disabled">Comments</label>
          </div>
          <div className="row">
            <div className="col "><h5>How can we Help?</h5>
              <div className="form-check my-1 ">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                  Website Design
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                  UX design
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                  User research
                </label>
              </div>
            </div>
            <div className="col my-4">
              <div className="form-check my-1">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                  Content Creation
                </label>
              </div>
              <div className="form-check my-1">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                  Stratergy & consulting
                </label>
              </div>
              <div className="form-check my-1">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                  Other
                </label>
              </div>

            </div>
          </div>
          <div className='text-center my-2' >
          <button type="button" class="btn btn-secondary" style={{width:"590px"}}>Submit</button>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}


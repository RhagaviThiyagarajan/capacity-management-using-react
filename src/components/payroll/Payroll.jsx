import React from 'react'
import './Payroll.css'



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Payroll() {
 
  return (
    <div>
        
        <div className="hotelContainer">
           <div className="hotelWrapper">
           <div className="slider">
            <h1 className="hotelTitle"></h1>
            <img className="hotelImg" src="https://assets.taxassist.co.uk/articles/1567758390_payroll-news.jpg"></img>
           
            <div className="hotelAddress">
                {/* <FontAwesomeIcon icon={falOcationDot}/> */}
               
              <p className="hotelDesc">
                PAYROLL PROCESS</p>  
                <button>Click here to know more</button>
            </div>
          </div>
          </div></div>
        </div>
 
  )
}

export default Payroll

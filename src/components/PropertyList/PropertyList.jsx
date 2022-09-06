import React from 'react'
import './PropertyList.css'
function PropertyList() {
  return (
    <div className="pList">
        <div className="pListItem">
            <img className="plistImg" src="https://img.freepik.com/free-photo/diverse-people-working-office_53876-104681.jpg?w=1060&t=st=1661964639~exp=1661965239~hmac=846fef5e12ca5d7e4aeb2bcf4fc3bf3bf9cca39dbeed8efcebd98c490e287db3"/>
            <div className="plistTitle">
                <li>
                <h3>WHAT IS  THE PRODUCTION COST?</h3>
                
                </li>
                <li>
                <h3>WILL IT BE ON TIME DELIVERY?</h3>
                </li>
                <li>
                <h3>WHAT IS  THE RESOURCE UTILIZATION?</h3>
                </li>
                <li>
                <h3> LEAD TIMES!</h3>
                <button>Click to know more</button>
                </li>
            </div>
        </div>
    </div>
  )
}

export default PropertyList

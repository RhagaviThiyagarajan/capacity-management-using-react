import React from 'react'
import "./Home.css"
import Footer from '../../components/footer/Footer'
import Featured from "../../components/features/Feaured"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import FeaturedProperties from '../../components/featured/FeaturedProperty'
import PropertyList from '../../components/PropertyList/PropertyList'
import Payroll from '../../components/payroll/Payroll'
import MailList from '../../components/mailList/MailList.jsx';
function Home() {
  return (
    
    <div>
    <Navbar/>
    <Header/>
 

    
    <div className="homeContainer"> 
    <span className="homeContainer">
       <PropertyList/>
       <FeaturedProperties/>
       </span>
   
      
       </div>
       <h1 className="home-title">PAYROLL</h1>
       <Payroll/>







<div>
 <h1>Existing user</h1> 

    <MailList/>
    <Footer/>
    
    </div> 

    <div>
    <h1 className="home-title">HIRING</h1>
    <Featured/>
    </div>
    </div> 
 
  )
}

export default Home
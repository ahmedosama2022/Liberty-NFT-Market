import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './item.css'
import { Col } from 'react-bootstrap'
import Aos from 'aos';

const ItemDetails = () => {
  useEffect(() => {
    Aos.init({duration:1500});
  }, []);
  return (
    <div className='ItemDetails'>
       <section className='secc1 '>
      <div className="row container" data-aos="fade-left">
        <div className="col-lg-12 do">
        <h6>Liberty NFT Market</h6>
        <h1>DISCOVER SOME TOP ITEMS</h1>
        <h5><span style={{color:"gray"}}><Link to="/Home">Home </Link></span>Item Details</h5>
        <br/>
        <br/>
        <br/>
       <div className='ex1'>
       <Link to="/Explore">
        <button className='bh1'>Explore Our Items</button>
        </Link>
        <Link to="/CreateYours">
        <button className='bh2'>Create Your NFT</button>
        </Link>
       </div>
        </div>
      </div>
      </section>

      <div className=' sec23 container'>
      <div className="row ">
    <Col lg="12" xl="12">
      <h2>View <span style={{color:"#7453fc"}}>Details</span> For Item Here.</h2>
    </Col>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div className=' sec33 container'>
      <div className="row ">
    <Col lg="6" xl="6" data-aos="zoom-in">
     <img className='imk1' src='images\item-details-01.jpg'/>
    </Col>
    
    <Col lg="12" xl="6"  data-aos="fade-left">
     <h5>Dolores Haze Westworld Eye</h5>
     <br/>
     <br/>
     <div className='fgh'>
      <img className='imk2' src='images\single-author.jpg'/>
      <h6>Liberty Artist
        <br/>
<span style={{color:"#7453fc"}}>@libertyart</span></h6>
     </div>
     <br/>
     <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit,sed do 
      <br/>
      eiusmod tempor incididunt ut labore  et dolore magna aliqua.</p>

      <br/>
      <div className='df'>
        <h6>Current Bid
          <br/>
          <br/>
<span style={{color:"#7453fc"}}>6.06 ETH</span>
<br/>
<br/>
($8,025.50)</h6>
<h6>COwner
          <br/>
          <br/>
<span style={{color:"#7453fc"}}>David Walker</span>
<br/>
<br/>
(@davidwalker)</h6>
<h6>Ends In
          <br/>
          <br/>
<span style={{color:"#7453fc"}}>3D 05H 20M 58S</span>
<br/>
<br/>
($8,025.50)</h6>
      </div>
      <div className='ffg'>
       
        <br/>
        <br/>
        <button> Submit Now</button>
      </div>
    </Col>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>

    <div className='sec63 container'>
      <div className='row'>
      <Col lg="12" xl="12">
          <div className='sds'>
          <h3>Current Biddings Prices ( ETH )</h3>
          <h5>Sort By: Latest</h5>
          </div>
        
          </Col>
        
         
        
      </div>
    </div>

    <div className='sec43 container'>
      <div className='row' data-aos="zoom-in-left">
        <Col lg="12" xl="4">
          <div className='de1'>
            <img src='images\current-01.jpg'/>
            <div className='ff'>
            <br/>
              <h4>David Walker</h4>
              
              <h6 style={{color:"#7453fc"}}>@davidwalker</h6>
              <hr/>
              <h5>Bid: <span style={{color:"#7453fc"}}>0.06 ETH</span></h5>
              <br/>
              <h6 style={{color:"#7453fc"}}>24/07/2022, 22:00</h6>
            </div>
          </div>


          </Col>
          <Col lg="12" xl="4">
          <div className='de1'>
            <img src='images\current-02.jpg'/>
            <div className='ff'>
            <br/>
              <h4>David Walker</h4>
              
              <h6 style={{color:"#7453fc"}}>@davidwalker</h6>
              <hr/>
              <h5>Bid: <span style={{color:"#7453fc"}}>0.06 ETH</span></h5>
              <br/>
              <h6 style={{color:"#7453fc"}}>24/07/2022, 22:00</h6>
            </div>
          </div>


          </Col>
          <Col lg="12" xl="4">
          <div className='de1'>
            <img src='images/current-03.jpg'/>
            <div className='ff'>
            <br/>
              <h4>David Walker</h4>
              
              <h6 style={{color:"#7453fc"}}>@davidwalker</h6>
              <hr/>
              <h5>Bid: <span style={{color:"#7453fc"}}>0.06 ETH</span></h5>
              <br/>
              <h6 style={{color:"#7453fc"}}>24/07/2022, 22:00</h6>
            </div>
          </div>


          </Col>
      </div>
      <br/>
      <br/>
      <div className='row' data-aos="zoom-in-right">
        <Col lg="12" xl="4">
          <div className='de1'>
            <img src='images/current-02.jpg'/>
            <div className='ff'>
            <br/>
              <h4>David Walker</h4>
              
              <h6 style={{color:"#7453fc"}}>@davidwalker</h6>
              <hr/>
              <h5>Bid: <span style={{color:"#7453fc"}}>0.06 ETH</span></h5>
              <br/>
              <h6 style={{color:"#7453fc"}}>24/07/2022, 22:00</h6>
            </div>
          </div>


          </Col>
          <Col lg="12" xl="4">
          <div className='de1'>
            <img src='images/current-04.jpg'/>
            <div className='ff'>
            <br/>
              <h4>David Walker</h4>
              
              <h6 style={{color:"#7453fc"}}>@davidwalker</h6>
              <hr/>
              <h5>Bid: <span style={{color:"#7453fc"}}>0.06 ETH</span></h5>
              <br/>
              <h6 style={{color:"#7453fc"}}>24/07/2022, 22:00</h6>
            </div>
          </div>


          </Col>
          <Col lg="12" xl="4">
          <div className='de1'>
            <img src='images/current-01.jpg'/>
            <div className='ff'>
            <br/>
              <h4>David Walker</h4>
              
              <h6 style={{color:"#7453fc"}}>@davidwalker</h6>
              <hr/>
              <h5>Bid: <span style={{color:"#7453fc"}}>0.06 ETH</span></h5>
              <br/>
              <h6 style={{color:"#7453fc"}}>24/07/2022, 22:00</h6>
            </div>
          </div>


          </Col>
      </div>
      
    </div>
    <section className='sec66 ' data-aos="flip-down">
      <div>
      <hr className='hr3'></hr>
      <div className='div7'>
      <h1>Create Your NFT & Put It On The Market.</h1>
      <Link to="/CreateYours">
      <button>Create Your NFT Now</button>
      </Link>
      </div>
      <br/>
      <br/>
      <br/>
      <div className='secd'>
        <div className='infe'>
          <img src='images/icon-02.png'/>
          <br/>
          <br/>
          <h2>Set Up Your Wallet</h2>
          <br/>
          <br/>
          <h6>NFT means Non-Fungible Token that are used in digital 
            <br/>
            <br/>
            cryptocurrency markets. There are many different kinds
            <br/>
            <br/>
             of NFTs in the industry.</h6>
        </div>
        <div className='infe'>
          <img src='images/icon-04.png'/>
          <br/>
          <br/>
          <h2>Add Your Digital NFT</h2>
          <br/>
          <br/>
          <h6>There are 5 different HTML pages included in
            <br/>
            <br/>
            this NFT website template. You can edit or
            <br/>
            <br/>
            modify any section on any page as you required.</h6>
        </div>
        <div className='infe'>
          <img src='images/icon-06.png'/>
          <br/>
          <br/>
          <h2>Sell Your NFT & Make
            <br/>
             Profit</h2>
          <br/>
          <br/>
          <h6>If you would like to support our TemplateMo 
            <br/>
            <br/>
            website, please visit our contact page to make a
            <br/>
            <br/>
             of NFTs in the industry.</h6>
        </div>
      </div>
      </div>
    </section>
    </div>
  )
}

export default ItemDetails
import React, {useEffect} from 'react'
import './create.css'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import Aos from 'aos';


import Form from 'react-bootstrap/Form';
const CreateYours = () => {
  useEffect(() => {
    Aos.init({duration:500});
  }, []);
  return (
    <div className='CreateYours'>
        <section className='secc1 '>
      <div className="row container" data-aos="fade-left">
        <div className="col-lg-12 do">
        <h6>Author Details</h6>
        <h1>CREATE YOUR NFT NOW.</h1>
        <h5><span style={{color:"gray"}}><Link to="/Home">Home </Link></span> Create Yours</h5>
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
      <div className='container dfg'>
        <div className='row'>
          <Col lg="12" xl="12">
            <h2>Apply For Your <span style={{color:" #7453fc"}}>Item</span> Here.</h2>
          </Col>
        </div>
      </div>

<br/>
<br/>
<br/>
      <div className='container fg5' data-aos="zoom-in-right">
        <div className='row'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Item Title</Form.Label>
        <Form.Control className='inpu' type="text" placeholder="Ex. Loyn King" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description For Item</Form.Label>
        <Form.Control className='inpu' type="text" placeholder="Give Us Your idea" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Username</Form.Label>
        <Form.Control className='inpu' type="Email" placeholder="Ex. @AhmedOsaama" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price Of Item</Form.Label>
        <Form.Control className='inpu' type="text" placeholder="Price debends on quality. Ex 0.06 ETH" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Royalties</Form.Label>
        <Form.Control className='inpu' type="text" placeholder="Common royalties" />
      </Form.Group>
      
      <button variant="primary" type="submit">
        Submit
      </button>
    </Form>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default CreateYours
import React from 'react'
import './Slide.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Slider() {
  return (
    <div>
        <div className='header'>
            <img className='img1' src="./images/image1.jpg"></img>
            <div className='name'>
            <h5 className='text-dark'> xyz company pvt.ltd</h5>
            </div>
            <div className='name-2'>   
            </div>
        </div>
        <div className='left'>
            <img className='img2' src='./images/image2.jpg'></img>
             <h6>Ram Mohan</h6>
             <h6>rammohan@gmail.com</h6>
        </div>
        <div className='side-content'>
            <div className='side-content-1'>
                <h6 className='text-center'>Dashboard</h6>
            </div>
            <div className='side-content-2'>
                <h6 className='text-center'>Perks</h6>
            </div>
            <div className='side-content-3'>
                <h6 className='text-center'>Addons</h6>
            </div>
            <div className='side-content-4'>
                <h6 className='text-center'>FAQ</h6>
            </div>
            <div className='side-content-5'>
                <h6 className='text-center'>Support</h6>
            </div>

            <div className='side-content-6'>
                <h6 className='text-center'>Logout</h6>
            </div>
        </div>
        <div className='menu'>
             <h2 className='text'>Choose a plan that's just right for you</h2>

        <Row>
        <Col>
        <Card className='card1' style={{ width: '18rem' ,height:'300px'}}>
      <Card.Body>
        <Card.Title>Basic</Card.Title>
        <Card.Text>
          $9.99/mo
        </Card.Text>
        <Button variant="danger">Get started</Button>       
         <hr></hr>
        <Card.Text>
        up to 25 users
        </Card.Text>
        <Card.Text>
        upto 25gb storage
        </Card.Text>
        <Card.Text>
        email support
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='card1' style={{ width: '18rem' ,height:'300px'}}>
      <Card.Body>
        <Card.Title>Standard</Card.Title>
        <Card.Text>
        $9.99/mo
        </Card.Text>
        <Button variant="warning">Get started</Button>        
        <hr></hr>
        <Card.Text>
        up to 25 users
        </Card.Text>
        <Card.Text>
        upto 25gb storage
        </Card.Text>
        <Card.Text>
        email support
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='card1' style={{ width: '18rem' ,height:'300px'}}>
      <Card.Body>
        <Card.Title>Premium</Card.Title>
        <Card.Text>
        $9.99/mo
        </Card.Text>
        <Button variant="info">Get started</Button>       
         <hr></hr>
        <Card.Text>
        up to 25 users
        </Card.Text>
        <Card.Text>
        upto 25gb storage
        </Card.Text>
        <Card.Text>
        email support
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <div className='sub-menu'>
      <Row>
      <Col>
      <div className='sub-menu-2'>
          <h6>free forever</h6>
          <h3 className='mt-3'>Free starter</h3>
          <p> The quickest and easiest</p>
          <p> with basic functionalites</p> 
        </div>
      </Col>
      <Col>
      <div className='sub-menu-3'>
          <h6 className='mt-3'>free forever</h6>
          <h3 className='mt-3'>Free starter</h3>
          <p> The quickest and easiest</p>
          <p> with basic functionalites</p>
         
        </div>
      </Col>
      </Row>
        </div>
        <div className='sub-item'>

        <Row>
      <Col>
      <div className='sub-item-1'>
        <div className='elmnt2'>
        <h6 className='mt-2'>lets Connect</h6>
        </div>
          <h3 className='mt-3'>Enterprise plan</h3>
          <p> The quickest and easiest</p>
          <p> with basic functionalites</p> 
        </div>
      </Col>
      <Col>
      <div className='sub-item-2'>
          <h6 className='mt-3'>what you will get</h6>
          <h3 className='mt-3'>Free starter</h3>
          <p> The quickest and easiest</p>
          <p> with basic functionalites</p> 
        </div>
      </Col>
      </Row>  
        </div>
        </div>
    </div>
  )
}

export default Slider
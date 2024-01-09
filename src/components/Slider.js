import React from 'react'
import './Slide.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';




function Slider() {
  return (
    <div>
<Navbar expand="lg" className="" style={{'backgroundColor':'darkblue'}}>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>BID WINNER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"  className='text-white'>Dashboard</Nav.Link>
            <Nav.Link href="#link"  className='text-white'>Jobs</Nav.Link>
            <Nav.Link href="#link"  className='text-white'>calender</Nav.Link>
            <Nav.Link href="#link"  className='text-white'>cost catalog</Nav.Link>
            <Nav.Link href="#link"  className='text-white'>Dtabase</Nav.Link>
            <Nav.Link href="#link"  className='text-white'>Tutorials</Nav.Link>



          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
    <h2 className='txt1'>categories</h2>
    <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search Categories"
              className="txt3"
            />
          </Col>
        </Row>
      </Form>
      <div className='main'>
      <Table  className='w-25 h-25' >
      <thead>
        <tr>
          <th>sl no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
      </div>
    <div className='cntnt'>
      <Row>
        <Col>

  <h6  className='mt-2'>job name</h6>
  <h6>job number</h6>
  <h6>unit </h6>
  <h6>Difficulty level</h6>
        </Col>
        <Col>
<h6  className='mt-2'>task project1</h6>
<h6>#ABV3265413</h6>
<h6>US</h6>
<h6>HIGH</h6>
      </Col>
      <Col>
      <Button  className='mt-2' variant="primary">Job Details</Button><br></br>
      <Button className='mt-3' variant="primary">Button 2</Button><br></br>
      <Button className='mt-2' variant="light">Button 3</Button>
      </Col>
      </Row>
    </div>
    <div>
    <Form inline className='frm mt-4'>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search projects"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <h5>sort by</h5>
          </Col>
          <Col xs="auto">
          <NavDropdown title="Name" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col>
          <Button className='mt-2' variant="light">import</Button> 
          </Col>
        </Row>
      </Form>
    </div>
    <div className='table1'>
    <Table  className='w-75 h-25' >
      <thead>
        <tr>
          <th>sl no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td></td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td></td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
          <td></td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
       
      </tbody>
    </Table>
    </div>
    </div>
       
    </div>
  )
}

export default Slider
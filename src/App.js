import React, { Component } from 'react';
import { Navbar,Nav,Form, FormControl,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './image/logo.jpg';
import first1 from './image/first1.jpg';
import photo3 from './image/photo3.jpg';
import photo4 from './image/photo4.jpg';
import photo5 from './image/photo5.jpg';
import photo6 from './image/photo6.png';
import photo7 from './image/photo7.png';
// simport { First } from 'react-bootstrap/PageItem';

const cate = {
  cate1:{
  title: "Taylor Swift",
  artist: "Taylor Swift",
  url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
  image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
  thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
},
  cate2:{
  title: "Fearless",
  artist: "Taylor Swift",
  url: "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
  image: "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
  thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
},
  cate3:{
  title: "Speak Now",
  artist: "Taylor Swift",
  url: "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886",
  image: "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
  thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
},
  cate4:{
  title: "Red",
  artist: "Taylor Swift",
  url: "https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU",
  image: "https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
  thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
  },
  cate5:{
    title: "1989",
    artist: "Taylor Swift",
    url: "https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
    image: "https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
    thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
}

}

const BigDiv = {
  display:'flex',
  flexWrap:'wrap',
  marginLeft:'0px'
}
const First1 = {
  width:'70%',
  background:"white",display:'flex',
  flexWrap:'wrap',
  float:'left'
}
const First2 = {
  width:'100%',
  height:'500px',
  background:'blue',
  position:'relative',
  float:'left'
}
const First3 = {
  position:'absolute',
  background:'rgba(0,0,0,0.5)',
  color:'white',
  top:'0px',
  width:'100%',
  height:'500px'
}
const First4 = {
  padding:"110px",
  fontSize:'180px',
  fontFamily:'Chilanka',
  textAlign:'center'
}
const First5 = {
  padding:"10px",
  background:'white',
  fontSize:'20px',
  fontFamily:'Chilanka',
  textAlign:'center'
}
// const First6 = {
//   position:'relative',
//   width:'50%',
//   height:'262px',
//   background:"#dc3545",
//   float:'left',
//   marginTop:'20px'
// }
const First7 = {
  position:'absolute',
  background:'rgba(0,0,0,0.5)',
  color:'white',
  top:'162px',
  width:'100%',
  height:'100px'
}
const First8 = {
  width:'50%',
  height:'262px',
  background:"#28a745",
  marginTop:'20px',
  position:'relative',
  float:'left'
}
const First9 = {
  position:'absolute',
  background:'rgba(0,0,0,0.5)',
  color:'white',
  top:'162px',
  width:'100%',
  height:'100px'
}
const First10 = {
  width:'50%',
  height:'262px',
  background:"#17a2b8",
  marginTop:'0px',
  position:'relative'
}
const First11 = {
  position:'absolute',
  background:'rgba(0,0,0,0.5)',
  color:'white',
  top:'162px',
  width:'100%',
  height:'100px'
}
const First12 = {
  width:'50%',
  height:'262px',
  background:"#20c997",
  marginTop:'0px',
  position:'relative'
}
const First13 = {
  position:'absolute',
  background:'rgba(0,0,0,0.5)',
  color:'white',
  top:'162px',
  width:'100%',
  height:'100px'
}
const First14 = {
  width:'30%',
  background:"#dc3545;",
  textAlign:'center',
  display:'flex',
  flexWrap:'wrap'
}
class App extends Component {

  render() {  
      return (
      <div>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="book">Book Categories</Nav.Link>
              <Nav.Link href="#song">Song Categories</Nav.Link>
              <Nav.Link href="#popular">Popular Song</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>


        <div style = {BigDiv}>

          <div style = {First1}>
            
            <div style = {First2}> 
              <img src={logo} alt="Logo" width="100%" height="500px" position='relative'/>
              <div style = {First3}>
                <div style={First4}>
                    <p>{cate.cate2.title}</p>
                    <div style={First5}>
                    <p><a href="https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM" target="_blank">click to see more detial</a></p>
                    </div>
                </div>
              </div>  
            </div>
  
            <div style = {First6}>
              <div>
                <img src={first1} alt="First1" width="100%" height="262px" position='relative'/>
                <div style = {First7}>
                  <div>
                    <p>Title: {cate.cate1.title}</p>
                    <p>Artist: {cate.cate1.artist}</p>
                    <a href='https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6' target="_blank">click to see more ....</a>  
                  </div>
                </div>
              </div>
            </div>

            <div style = {First8}>
              <div>
                <img src={photo3} alt="Photo3" width="100%" height="262px" position="relative"/> 
                <div style = {First9}>
                  <div>
                    <p>Title: {cate.cate3.title}</p>
                    <p>Artist: {cate.cate3.artist}</p>
                    <p>
                      <a href='https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886' target="_blank">click to see more....</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style = {First10}>
              <div>
                <img src={photo4} alt="Photo4" width="100%" height="262px" position='relative'/> 
                <div style = {First11}>
                  <div>
                    <p>Title: {cate.cate4.title}</p>
                    <p>Artist: {cate.cate4.artist}</p>
                    <p>
                      <a href='https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU' target="_blank">click to more detial ...</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style = {First12}>
              <div>
                <img src={photo5} alt="Photo5" width="100%" height="262px" position='relative'/> 
                <div style = {First13}>
                  <div>
                    <p>Title: {cate.cate5.title}</p>
                    <p>Artist: {cate.cate5.artist}</p>
                    <p>
                      <a href='https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI' target="_blank">click to see more ...</a>
                    </p>
                  </div>
              </div>
            </div>
            </div>
          </div>
          <div style = {First14}>
              <div><img src={photo6} alt="Photo6" width="100%" height="550x"/> </div>
              <div><img src={photo7} alt="Photo7" width="100%" height="550px"/> </div>              
          </div>
          <div>
          </div>      
        </div>  
      </div>
    );
  }
}

export default App;

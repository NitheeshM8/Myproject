import React from 'react';
import Video from '../../Components/img/Kids.mp4';
import Img1 from '../../Components/img/kids13.jpg';
import Img2 from '../../Components/img/kids14.jpg';
import Img3 from '../../Components/img/kids21.jpeg';
import Img4 from '../../Components/img/kids22.jpeg';
import Img5 from '../../Components/img/kids17.jpeg';
import Img6 from '../../Components/img/kids18.jpeg';
import Img7 from '../../Components/img/kids23.jpeg';
import Img8 from '../../Components/img/kids22.jpeg';
import { Hidden } from '@mui/material';
import './Men.css';
export default function Kids() {
  return (
    <>
    <div>

        <video autoPlay muted  style={{width:"100%" ,height:"850px",overflow:"cover"}}>
            <source src={Video} type="video/mp4"/>
        </video>
        </div>
        <div>
      <div>
        <h1 style={{textAlign:"center"}}> Products</h1>
      </div>
     <div className='bottom' style={{width : "auto",gap:"10px",display:"flex",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",display : "flex",flexDirection:"column"}}>
 <img style={{width : "100%",height:"100%"}} src={Img1} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img2} alt="" className="secondImg"/>
          </div>
            <h2>Relaxed Fit Hoodie</h2>
          <div className="prices">
              <h3>Rs. 1700"</h3>
              <h3>Rs. 1499"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",display : "flex",flexDirection:"column"}}>
              <img style={{width : "100%",height:"100%"}} src={Img3} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img4} alt="" className="secondImg"/>
          </div>
            <h2>Short Jersy Top</h2>
          <div className="prices">
              <h3>Rs. 1000"</h3>
              <h3>Rs. 799"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",display : "flex",flexDirection:"column"}}>
              <img style={{width : "100%",height:"100%"}} src={Img5} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img6} alt="" className="secondImg"/>
          </div>
            <h2>Black Panther Marvel T-Shirt</h2>
          <div className="prices">
              <h3>Rs. 1500"</h3>
              <h3>Rs. 1290"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",display : "flex",flexDirection:"column"}}>
              <img style={{width : "100%",height:"100%"}} src={Img7} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img8} alt="" className="secondImg"/>
          </div>
            <h2>Nizza RF Shoes</h2>
          <div className="prices">
              <h3>Rs. 10000"</h3>
              <h3>Rs. 7999"</h3>
          </div>
        </div>
      </div>
     <div className='bottom' style={{width : "auto",gap:"10px",display:"flex",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",display : "flex",flexDirection:"column"}}>
 <img style={{width : "100%",height:"100%"}} src={Img1} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img2} alt="" className="secondImg"/>
          </div>
            <h2>Relaxed Fit Hoodie</h2>
          <div className="prices">
              <h3>Rs. 1700"</h3>
              <h3>Rs. 1499"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",display : "flex",flexDirection:"column"}}>
              <img style={{width : "100%",height:"100%"}} src={Img3} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img4} alt="" className="secondImg"/>
          </div>
            <h2>Short Jersy Top</h2>
          <div className="prices">
              <h3>Rs. 1000"</h3>
              <h3>Rs. 799"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",display : "flex",flexDirection:"column"}}>
              <img style={{width : "100%",height:"100%"}} src={Img5} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img6} alt="" className="secondImg"/>
          </div>
            <h2>Black Panther Marvel T-Shirt</h2>
          <div className="prices">
              <h3>Rs. 1500"</h3>
              <h3>Rs. 1290"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",display : "flex",flexDirection:"column"}}>
              <img style={{width : "100%",height:"100%"}} src={Img7} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img8} alt="" className="secondImg"/>
          </div>
            <h2>Nizza RF Shoes</h2>
          <div className="prices">
              <h3>Rs. 10000"</h3>
              <h3>Rs. 7999"</h3>
          </div>
        </div>
      </div>
    </div>
   
      </> 
  );
}
import React from 'react';
import './Services.css';
import { MdDesignServices } from 'react-icons/md';
import { FaWrench } from 'react-icons/fa';
import { AiOutlineLaptop } from 'react-icons/ai';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';




const Services = () => {
 const API_URL = process.env.REACT_APP_API_URL;
 const [serviceDescription, setServiceDescription] = useState();


 const fetchServiceInformation = async () => {
   await axios
     .get(`${API_URL}/infos/getAllInformation`)
     .then((response) => setServiceDescription(response.data.data.filter(response => response.type === 'services')));
 };


 useEffect(() => {
   fetchServiceInformation();
 },[]);










 return (
   <div className="services-container" id="services">


     <div className="myServices">My Services</div>




     <div className="services">
     {serviceDescription && serviceDescription.map((service,key)=>{
     return(
  




       <div className="design">
         <div className="service-icon">
          
          {key==0 ? <MdDesignServices /> : key==1 ?<FaWrench/> : <AiOutlineLaptop/>}
         </div>


         <div className="service-name">{service.title}</div>
         <div className="service-description">
          {service.fullDescription}
         </div>
       </div>
     
      )
     })
   }
     </div>
   </div>
 );
};


export default Services;




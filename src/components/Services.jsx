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
  const [serviceDescription, setserviceDescription] = useState();

  const fetchServiceInformation = async () => {
    await axios
      .get(`${API_URL}/infos/getAllInformation`)
      .then((response) => setserviceDescription(response.data.data));
    console.log('product', serviceDescription);
  };

  useEffect(() => {
    fetchServiceInformation();
  });

  const designData =
    serviceDescription &&
    serviceDescription.find((data) => data.title === 'Design')
      ? serviceDescription.find((data) => data.title === 'Design')
      : null;

  const developmentData =
    serviceDescription &&
    serviceDescription.find((data) => data.title === 'Development')
      ? serviceDescription.find((data) => data.title === 'Development')
      : null;

  const maintenanceData =
    serviceDescription &&
    serviceDescription.find((data) => data.title === 'Maintenance')
      ? serviceDescription.find((data) => data.title === 'Maintenance')
      : null;


  return (
    <div className="services-container" id="services">
      <div className="myServices">My Services</div>

      <div className="services">
        <div className="design">
          <div className="service-icon">
            {/* <img className="designimage"src={Design} alt="design icon" /> */}
            <MdDesignServices />
          </div>
          <div className="service-name">{designData?.title}</div>
          <div className="service-description">
            {designData?.fullDescription}
          </div>
        </div>
        <div className="development">
          <div className="service-icon">
            {/* <img className="developmentimage" src={Development} alt="development" /> */}
            <FaWrench />
          </div>
          <div className="service-name">{developmentData?.title}</div>
          <div className="service-description">
           {developmentData?.fullDescription}
          </div>
        </div>
        <div className="maintenance">
          <div className="service-icon">
            {/* <img className="maintenance-img" src={Maintenance} alt="Maintenance" /> */}
            <AiOutlineLaptop />
          </div>
          <div className="service-name">{maintenanceData?.title}</div>
          <div className="service-description">
           {maintenanceData?.fullDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

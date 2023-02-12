import './Services.css';
import { useState } from 'react';
import Service from './Service';

const Services = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="admin-services">
      <h1>Services Section</h1>
      <div className="admin-services__list">
        <Service
          title={title}
          setTitle={setTitle}
          image={image}
          setImage={setImage}
          description={description}
          setDescription={setDescription}
          submitHandler={submitHandler}
        />
        <Service
          title={title}
          setTitle={setTitle}
          image={image}
          setImage={setImage}
          description={description}
          setDescription={setDescription}
          submitHandler={submitHandler}
        />
        <Service
          title={title}
          setTitle={setTitle}
          image={image}
          setImage={setImage}
          description={description}
          setDescription={setDescription}
          submitHandler={submitHandler}
        />
      </div>
    </div>
  );
};

export default Services;

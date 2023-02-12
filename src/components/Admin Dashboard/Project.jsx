import './Project.css';
import axios from 'axios';
import { useState } from 'react';

const Project = ({ objID, data }) => {
  const API_URL = process.env.REACT_APP_API_URL;

  const {
    title: _title,
    image: _image,
    description: _description,
    fullDescription: _fullDescription,
  } = data;
  const [title, setTitle] = useState(_title);
  const [image, setImage] = useState(_image);
  const [description, setDescription] = useState(_description);
  const [fullDescription, setFullDescription] = useState(_fullDescription);

  const updateProjectsData = async () => {
    await axios.put(`${API_URL}/infos/updatePrevWorkByID/${objID}`, {
      type: 'projects',
      title: title,
      image: image,
      description: description,
      fullDescription: fullDescription,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateProjectsData();
  };

  return (
    <div className="admin-project__container">
      <label htmlFor="">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Image:
        <input
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Full Description:
        <input
          type="text"
          value={fullDescription}
          onChange={(e) => setFullDescription(e.target.value)}
        />
      </label>
      <div className="admin-btns">
        <button className="btn-admin">Cancel</button>
        <button className="btn-admin btn-primary" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Project;

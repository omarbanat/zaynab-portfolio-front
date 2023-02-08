import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [homeID, setHomeID] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;

  const fetchHomeData = async () => {
    const res = await axios.get(`${API_URL}/infos/getAllInformation`);

    res.data.data.forEach((obj) => {
      if (obj.type == 'home') {
        setHomeID(obj['_id']);
        setTitle(obj.title);
        setImage(obj.image);
        setDescription(obj.description);
        setFullDescription(obj.fullDescription);
      }
    });
  };

  const updateHomeData = async () => {
    await axios.put(
      `${API_URL}/infos/updatePrevWorkByID/${homeID}`,
      {
        type: 'home',
        title,
        image,
        description,
        fullDescription,
      }
    );
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    updateHomeData();
  };

  return (
    <div className="admin-home">
      <h1>Home Section</h1>
      <div className="admin-home__container">
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
          <textarea
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
    </div>
  );
};

export default Home;

import './Blogs.css';
import Blog from './Blog';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);

  const fetchBlogsData = async () => {
    const res = await axios.get(`${API_URL}/blogs/getAllBlogs`);
    const data = res.data.data;
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  return (
    <div className="admin-blogs">
      <h1>Blogs Section</h1>
      <div className="admin-blogs__list">
        {data.map((el) => (
          <Blog key={el['_id']} objID={el['_id']} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

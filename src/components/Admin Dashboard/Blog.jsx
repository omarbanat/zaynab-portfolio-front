import './Blog.css';
import axios from 'axios';
import { useState } from 'react';

const Blog = ({ objID, data }) => {
  const API_URL = process.env.REACT_APP_API_URL;

  const { title: _title, image: _image, content: _content } = data;
  const [title, setTitle] = useState(_title);
  const [image, setImage] = useState(_image);
  const [content, setContent] = useState(_content);

  const updateSkillsData = async () => {
    await axios.put(`${API_URL}/blogs/updateBlogsByID/${objID}`, {
      title: title,
      image: image,
      description: null,
      fullDescription: null,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateSkillsData();
  };

  return (
    <div className="admin-blog__container">
      <label htmlFor="">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Content:
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Image:
        <input
          type="file"
          //   value={image}
          onChange={(e) => setImage(e.target.value)}
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

export default Blog;

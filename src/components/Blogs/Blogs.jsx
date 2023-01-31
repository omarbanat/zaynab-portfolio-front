import React from "react";
import "./Blogs.css";
import blogONE from './images/blogONE.png';
import blogTWO from './images/blogTWO.png';
import blogTHREE from './images/blogTHREE.png';



function Blogs() {
  return (
    <div>


      <div className="blogstitle">
         <h1 >Blogs</h1> 
      </div> 
      
      
      <div className="BlogsContainer">
        




        <div className="tripletblogs">
          <div className="imageBlogOne"> <img className="soura" src={blogONE} alt="first-image"/></div>
          <h4>Title of Blog 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero temporib...</p>
        </div>

        <div className="tripletblogs">
          <div className="imageBlogTwo"> <img className="soura" src={blogTWO} alt="second-image"/></div>
          <h4>Title of Blog 2</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero temporib...</p>
        </div>

        <div className="tripletblogs">
          <div className="imageBlogThree"> <img className="soura" src={blogTHREE} alt="third-image"/></div>
          <h4>Title of Blog 3</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero temporib...</p>
        </div>
        
      </div>
      <div className="button">
         
         <button type="button" className="showMoreBlogButton"><b>Show More..</b></button>
      </div> 
         
     
      
    </div>
  );
}

export default Blogs;

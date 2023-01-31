import React from "react";
import "./Blogs.css";
import ProjectOne from './images/ProjectOne.png';
import blogTWO from './images/blogTWO.png';
import blogTHREE from './images/blogTHREE.png';



function Projects() {
  return (
    <div>


      <div className="Projectstitle">
         <h1 >Blogs</h1> 
      </div> 
      
      
      <div className="ProjectsContainer">
        




        <div className="tripletProjects">
          <div className="imageBlogOne"> <img className="soura" src={ProjectOne} alt="first-image"/></div>
          <h4>Title of Blog 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero temporib...</p>
        </div>

        <div className="tripletProjects">
          <div className="imageBlogTwo"> <img className="soura" src={blogTWO} alt="second-image"/></div>
          <h4>Title of Blog 2</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero temporib...</p>
        </div>

        <div className="tripletProjects">
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

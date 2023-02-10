import React from 'react'
import "./Blogss.css"
import blogOne from './images/blogONE.png'
import blogTwo from './images/blogTWO.png'
import blogThree from './images/blogTHREE.png'
import { Link } from 'react-router-dom';

function Blogss() {
  return (
    
      <div id="blogs" className="wholeblogssection">
        
        
        
        <div className='blogstitlediv'>
           <h2 className='Blogsmaintitleheader'>Blogs</h2>
        </div>
        
        
        
        
        <div className='blogscenter'>
            <div className='tripletblogs'>
                <div class="mydivouter">	
                  <img className="BlogImagetriplet" src={blogOne} alt="firstimage"/>
                  <button type="button" class="mybuttonoverlap"><span>Read More</span></button>
                </div>
                <p className="blogstitleheader"><b>Blog Title</b></p>
                <p className="blogsdateheader">Published Date</p>
 
            </div>
            <div className='tripletblogs'>
                <div class="mydivouter">	
                <img className="BlogImagetriplet" src={blogTwo} alt="firstimage"/>
                <button type="button" class="mybuttonoverlap"><span>Read More</span></button>
                </div>
                <p className="blogstitleheader"><b>Blog Title</b></p>
                <p className="blogsdateheader">Published Date</p>

            </div>
            <div className='tripletblogs'>
                <div class="mydivouter">
                <img className="BlogImagetriplet" src={blogThree} alt="firstimage"/>
                <button type="button" class="mybuttonoverlap"><span>Read More</span></button>
                </div>
                <p className="blogstitleheader"><b>Blog Title</b></p>
                <p className="blogsdateheader">Published Date</p>
            </div>

        </div>
        
        
        
        
        
        <div className='blogsbuttondiv'>
        <Link to="/blogs"><button type="button" className="showMoreBlogButton">Show More</button></Link>
        </div>





      </div>
  
  )
}

export default Blogss;

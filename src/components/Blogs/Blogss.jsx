import React from 'react'
import "./Blogss.css"
import blogOne from './images/blogONE.png'
import blogTwo from './images/blogTWO.png'
import blogThree from './images/blogTHREE.png'

function Blogss() {
  return (
    
      <div className="wholeblogssection">
        
        
        
        <div className='blogstitlediv'>
           <h2 className='Blogsmaintitleheader'>Blogs</h2>
        </div>
        
        
        
        
        <div className='blogscenter'>
            <div className='tripletblogs'>
                <img className="soura" src={blogOne} alt="firstimage"/>
                <p className="blogstitleheader"><b>Blog Title</b></p>
                <p className="blogsdateheader">Published Date</p>
 
            </div>
            <div className='tripletblogs'>
                <img className="soura" src={blogTwo} alt="firstimage"/>
                <p className="blogstitleheader"><b>Blog Title</b></p>
                <p className="blogsdateheader">Published Date</p>

            </div>
            <div className='tripletblogs'>
                <img className="soura" src={blogThree} alt="firstimage"/>
                <p className="blogstitleheader"><b>Blog Title</b></p>
                <p className="blogsdateheader">Published Date</p>
            </div>

        </div>
        
        
        
        
        
        <div className='blogsbuttondiv'>
        <button type="button" className="showMoreBlogButton">Show More</button>
        </div>





      </div>
  
  )
}

export default Blogss

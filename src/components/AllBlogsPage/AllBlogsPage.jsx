import React from 'react'
import projectTwo from '../Projects/images/projectTWO.png';
import projectThree from '../Projects/images/projectTHREE.png';
import projectOne from '../Projects/images/projectONE.png';
import Footer from '../Footer';
import Navbar from '../Navbar';



function AllBlogsPage() {
  return (
    <div>
        <Navbar />
        <h1 className='ProjectstitleL'>Blogs</h1>
      <div className='ProjectsMainCenter' id='allProjectsPage'>
        
        <div className='projectscenter'>
            <div className='tripletprojects'>
                <div class="mydivouterp">
                <img className="sourap" src={projectOne} alt="firstimage"/>
                
                </div>
                <p className="projectstitleheader"><b>Blog Title</b></p>
                <p className="projectsdateheader">Published Date</p>
 
            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectTwo} alt="firstimage"/>
                
                </div>
                <p className="projectstitleheader"><b>Blog Title</b></p>
                <p className="projectsdateheader">Published Date</p>

            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <img className="sourap" src={projectThree} alt="firstimage"/>
                
                </div>
                <p className="projectstitleheader"><b>Blog Title</b></p>
                <p className="projectsdateheader">Published Date</p>
            </div>
            </div>


            


       

        <div className='projectscenter'>
            <div className='tripletprojects'>
                <div class="mydivouterp">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nobis quaerat sit sequi doloribus. Quasi minus voluptatibus ut, illum laborum mollitia excepturi ab voluptatum totam, aliquam architecto cum. Officia, ipsam!</p>
                </div>
              
 
            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni exercitationem, nemo soluta iusto dolores reprehenderit repudiandae voluptates excepturi sint dicta modi explicabo minima ipsa debitis consequatur maxime, similique magnam?</p>
                </div>
             

            </div>
            <div className='tripletprojects'>
            <div class="mydivouterp">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et molestias vel id mollitia quibusdam harum esse aliquam illo cupiditate deserunt, tenetur illum perferendis ut veniam facere ullam. Autem, modi in!</p>
                </div>
              
            </div>
            </div>
        
        </div>
       <Footer/> 
    </div>
  )
}

export default AllBlogsPage

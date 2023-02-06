import React from 'react';
import { BiPurchaseTag} from 'react-icons/bi';
import {MdDateRange} from 'react-icons/md';
import {BsGithub} from 'react-icons/bs';
import {RiLinkM} from 'react-icons/ri';
import OnePrj from './Images/Imagessectionblog.png'
import './Oneprojectpage.css';
function Oneprojectpage() {
  return (
    <div>
      <h1 className='Tprjitle'>Projects</h1>
          
          
          
          <div className='OneprojectPage'>
           
            <div className='AProjectContent'>
                <div className='imagesofproject'>
                    <img src={OnePrj} alt='ProjectImage' className='ProjImj'/>
                </div>
            </div>
            <div className='paragraphofproject'>
              <div className='dateofprj'><p><MdDateRange/>22-04-2022</p></div>

              <h2 className='ProjectNameprj'>Project Name</h2>
              <div className='descriptionofaproject'><p><BiPurchaseTag/>React, JavaScript, Html,NodeJs, MongoDB</p></div>
                
              <p className='paragprj'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam reiciendis soluta libero iure inventore atque aliquam, commodi aliquid nam rerum vitae quisquam, nisi, harum voluptas sit beatae voluptatem autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis libero in hic obcaecati est quod quidem ipsa eligendi a molestias laboriosam, similique vero ad dolores inventore voluptatum. Illo, nemo possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium adipisci rem accusamus. Repellat non distinctio cupiditate laudantium quis necessitatibus et. Sint exercitationem explicabo totam nostrum distinctio. Doloribus, illo esse.
              </p>
              <div className='buttonsPRJ'>
              <button type="button" className="showLINKPrjbtn"><RiLinkM className="gitLINKreactICON"/></button>
              <button type="button" className="showLINKPrjbtn"><BsGithub className="gitLINKreactICON"/></button>
              </div>

            </div>
          
          </div>



    </div>
    
  )
}

export default Oneprojectpage

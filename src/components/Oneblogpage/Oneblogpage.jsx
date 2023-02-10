import React from 'react';
import './Oneblogpage.css';
import ImBlog from './Images/Imagessectionblog.png';
import { MdDateRange } from 'react-icons/md';
import { BiPurchaseTag } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
function Oneblogpage() {

  return (
    <div>
      <Navbar />
      <div className="blogpage">
        <div className="BLOGS">
          <h3>Blogs</h3>
        </div>
        <div className="titledatesectionblog">
          <div className="blogNameBlg">
            <p>Web Development Blog</p>
          </div>

          <div className="timedescriptionblog1">
            <div className="descriptionofablogblg">
              <p>
                <BiPurchaseTag />
                React, JavaScript, Html,NodeJs, MongoDB
              </p>
            </div>
            <div className="dateofblg">
              <p>
                <MdDateRange />
                22-04-2022
              </p>
            </div>
          </div>
        </div>

        <div className="ImofONEblogPage">
          <img
            src={ImBlog}
            alt="batata"
            className="ImofONEblogPage"
            id="samewidthbg"
          />
        </div>

        <div className="ImofONEblogPage" id="pargblg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            debitis iure ea incidunt, sapiente accusantium magnam ex delectus
            modi omnis suscipit numquam tempore eum ipsam deleniti sint,
            voluptatem, aliquid fugit. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. In ipsam sit dolor beatae distinctio natus neque
            repellat suscipit, et, corrupti voluptatem, deserunt aspernatur non
            reiciendis laudantium veritatis? Sed, quis expedita. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dignissimos libero
            assumenda eveniet provident a temporibus delectus animi,
            exercitationem harum adipisci quos, consectetur vero veritatis vel
            odit veniam dolores illum numquam! I’m a Graphics Designer,Designng
            has become my everyday affair. masting styles, grids cant be less
            interesting. I’m a Graphics Designer, Designng has become my
            everyday affair. masting styles, grids cant be less interesting.
            lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Facilis deserunt officia qui nobis illo harum nemo
            totam, vel omnis, quidem ipsa! Aperiam cumque totam, modi possimus
            accusantium delectus sequi nostrum. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quisquam perferendis saepe aspernatur
            accusamus libero. Harum expedita eveniet incidunt qui, consequuntur
            dolores cum minima aperiam tenetur natus quo recusandae perferendis
            dicta.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Oneblogpage;

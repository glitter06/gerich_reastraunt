import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_images" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's words" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid repellat sunt, provident porro ex dolorum, debitis inventore officia ipsa hic, vero beatae nam. Dignissimos incidunt laborum, aliquam aspernatur quae necessitatibus!</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure rerum, molestias, veritatis vitae provident quos pariatur fuga itaque vero a soluta natus, quidem corrupti? Excepturi nam ipsam aperiam tempora?</p>
      </div>

     <div className="app__chef-sign">
      <p>kevin Logo</p>
      <p className="p__opensans">Chef & Founder</p>
      <img src={images.sign} alt="sign_images" />
     </div>
    </div>
  </div>
);

export default Chef;

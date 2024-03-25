import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const style = {
  marginBottom: '3rem'
}
const style2 = {
  margin: '2rem 0',
  color: '#DCCA87'
}
const style3 = {
  marginTop: '3rem'
}

const FindUs = () => (
 <div className="app__bg app__wrapper section__padding" id='contact'>
  <div className="app__wrapper_info">
    <SubHeading title="Contact" />
    <h1 className="headtext__cormorant" style={style}>Find Us</h1>
    <div className="app__wrapper-content">
      <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
      <p className="p__cormorant" style={style2}>Opening Hours</p>
      <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
    </div>
    <button type='button' className="custom__button"style={style3}>Visit Us</button>
  </div>

  <div className="app__wrapper_img">
    <img src={images.findus} alt="findus__img" />
  </div>
</div>
);

export default FindUs;

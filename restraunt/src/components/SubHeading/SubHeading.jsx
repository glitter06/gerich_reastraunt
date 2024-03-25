import React from 'react';
import images from '../../constants/images';
const SubHeading = (props) => {
  const Style = {
    marginBottom: '1rem',
  }
  return (
    <div style={Style}>
      <p className="p__cormorant">{props.title}</p>
      <img src={images.spoon} alt="spoon_image" className="spoon__img" />
    </div>
  )
};

export default SubHeading;

import React from 'react';

import './MenuItem.css';

 const color = { color: '#DCCA87',  }
 const color2 = { color: '#AAAAAA', }

const MenuItem = (props) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={color}>{props.title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{props.price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={color2} >{props.tags}</p>
    </div>
  </div>
);

export default MenuItem;

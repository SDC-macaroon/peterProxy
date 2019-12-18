import React from 'react';
import ReactDOM from 'react-dom';

const renderMenu = (heading, menuItems) => (
  <div className="menu" key={heading}>
    <div className="heading">{heading}</div>
    <div className="popup">
      <div className="spacer" />
      <div className="menuItems">
        {menuItems.map(item => <div className="menuItem" key={item}>{item}</div>)}
      </div>
    </div>
  </div>
);

const Header = () => (
  <div className="Header">
    <div className="promotion">
      <span className="deal clickable">$20 for a friend. $20 for you</span>
      . Nice.
    </div>
    <div className="headerLinks">
      <div className="headerLink clickable">Sell your art</div>
      <div className="headerLink clickable">Login</div>
      <div className="headerLink clickable">Signup</div>
    </div>
    <div className="headerBar">
      <div className="redBobble clickable">
        <div className="logo">RB</div>
        <div className="name">REDBOBBLE</div>
      </div>
      <div className="search">
        <input type="text" placeholder="Search designs and products" />
        <div className="submit clickable">&#x1F50D;</div>
      </div>
      <div className="buttons">
        <span className="favourite clickable">&#x2764;</span>
        <span className="cart clickable">&#128722;</span>
      </div>
    </div>
    <div className="menuBar">
      {[
        renderMenu('Clothing', ['All Clothing', 'Dresses', 'Hoodies &amp; Sweatshirts', 'Leggings', 'Skirts', 'Socks', 'T-Shirts', 'Tank Tops']),
        renderMenu('Stickers', ['All Stickers', 'Laptop Stickers']),
        renderMenu('Phone Cases', ['All Phone Cases', 'iPhone Cases', 'Samsung Galaxy']),
        renderMenu('Wall Art', ['All Wall Art', 'Art Board Prints', 'Art Prints', 'Canvas Prints', 'Framed Prints', 'Metal Prints', 'Photographic Prints', 'Posters']),
        renderMenu('Home & Living', ['All Home & Living', 'Acrylic Blocks', 'Bath Mats', 'Clocks', 'Coasters', 'Comforters', 'Duvet Covers', 'Floor Pillows', 'Mugs', 'Shower Curtains', 'Throw Blankets', 'Throw Pillows', 'Wall Tapestries']),
        renderMenu('Kids & Babies', ['All Kids Clothes', 'Baby One-Pieces', 'Baby T-Shirts', 'Kids Pullover Hoodies', 'Kits T-Shirts', 'Toddler Pullover Hoodies']),
        renderMenu('Accessories', ['All Accessories', 'Drawstring Bags', 'Scarves', 'Socks', 'Tech Accessories', 'Tote Bags', 'Travel Mugs', 'Water Bottles', 'Zipper Pouches']),
        renderMenu('All Stationary', ['Greeting Cards', 'Hardcover Journals', 'Pencil Cases', 'Postcards', 'Spiral Notebooks']),
        renderMenu('Gifts', ['All Gifts', 'Gifts for Friends', 'Gifts for Her', 'Gifts for Him', 'Gifts for Teens', 'Gifts for Them', 'Gifts on a Budget']),
      ]}
      <a href="/">
        <div className="menu">
          <div className="heading">Explore designs</div>
        </div>
      </a>
    </div>
  </div>
);

ReactDOM.render(<Header />, document.getElementById('header'));

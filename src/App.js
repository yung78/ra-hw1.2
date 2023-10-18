import React from 'react';
import './css/main.css';

const items = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

class ShopItemClass extends React.Component {
  
  render() {
    const { item } = this.props
    return (
      <div className="main-content">
        <h2>{ item.brand }</h2>
        <h1>{ item.title }</h1>
        <h3>{ item.description }</h3>
        <div className="description">{ item.descriptionFull }</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{ item.currency+item.price+'.00' }</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}


function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item={items} />
    </div>
  </div>
  );
}

export default App;

import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import shopData from '../../shopData';
import './shop.scss';

class Shop extends Component {
  state = {
    collections: shopData,
  };

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    )
  }
}

export default Shop;

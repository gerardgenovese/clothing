import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import Shop_Data from './shop.data.js';

class ShopPage extends React.Component {
  constructor(props){
    super();

    this.state = {
      collections: Shop_Data
    }
  }

  render(){
    const { collections } = this.state;
    return(
      <div className='shop-page'>
        {collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage;
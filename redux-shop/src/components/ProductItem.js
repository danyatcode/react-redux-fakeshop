import { Link } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux'

const ProductItem = () => {
    const products = useSelector((state) => state.allProducts.products);
    
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
          <div className="five wide column" style={{margin: "15px 0px"}} key={id}>
            <Link to={`/react-redux-fakeshop/product/${id}`}>
              <div className="ui link cards" style={{height : "500px"}}>
                <div className="ui card eq-card" style={{height: "100%"}}>
                  <div className="image" style={{height: "70%", display: "flex", alignItems: "center"}}>
                    <img src={image} alt={title} style={{maxHeight: "100%", objectFit: "contain"}} />
                  </div>
                  <div className="content" style={{display: "flex",flexDirection: "column", justifyContent: "center"}}>
                    <div className="header">{title}</div>
                    <div className="ui teal label tag" >${price}</div>
                    <div className="meta">{category}</div>
                  </div>
                </div>
              </div>
              </Link>
          </div>
        );
      });
  return (
    <>
    {renderList}
    </>
  )
}

export default ProductItem

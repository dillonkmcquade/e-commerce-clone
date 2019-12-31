import React from "react";
import { selectShopData } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionPreview from "../../components/preview-collection/collection-preview.component.jsx";

const ShopPage = ({ shopData }) => {
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  shopData: selectShopData(state)
});
export default connect(mapStateToProps)(ShopPage);

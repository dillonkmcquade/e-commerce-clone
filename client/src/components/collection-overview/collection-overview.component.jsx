import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../preview-collection/collection-preview.component";
import "./collection-overview.styles.scss";
import { selectShopData } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopData
});

export default connect(mapStateToProps)(CollectionOverview);

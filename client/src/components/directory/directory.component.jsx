import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import sections from "./directory.data";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: sections
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageURL={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;

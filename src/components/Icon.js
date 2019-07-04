import PropTypes from "prop-types"
import React from "react"
import "../icons/icons.css"

const Icon = ({ name, text = "" }) => (
  <span
    style={{
      display: "inline-block",
      verticalAlign: "middle"
    }}
    className={"rb-icon icon icon-" + name}
  >
    {text !== "" && <span className="rb-icon-text">{text}</span>}
  </span>
);

Icon.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string
};

export default Icon

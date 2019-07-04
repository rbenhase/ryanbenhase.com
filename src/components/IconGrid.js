import React from "react"
import {Parallax} from "react-scroll-parallax"
import Media from 'react-media';
import Icon from "./Icon"
import PropTypes from "prop-types"

const IconGrid = ({title, data, columns = 8, mobileColumns = 4, className = ''}) => (
  <div className={className}>
    <h1>{title}</h1>

    <Media query="(min-width: 1030px)">
      {matches =>
        matches ? (
          <div
            className="rb-icon-grid"
            style={{gridTemplateColumns: "1fr ".repeat(columns)}}
          >
            {data.map(function(item, i) {

              let boundary = (Math.floor(columns/2) - ( i%columns + 1) + 1 ) * 10 - 5;

              return (
                <Parallax x={[boundary, -boundary]} y={[0, 0]} tagOuter="span" key={i} >
                  <Icon {...item} />
                </Parallax>
              );
            })}
          </div>

          ) : (

          <div
            className="rb-icon-grid"
            style={{gridTemplateColumns: "1fr ".repeat(mobileColumns)}}
          >
            {data.map(function(item, i) {
              return (
                <Icon {...item} key={i}  />
              );
            })}
          </div>
        )
      }
    </Media>

  </div>
);

IconGrid.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.number,
  className: PropTypes.string,
};

export default IconGrid

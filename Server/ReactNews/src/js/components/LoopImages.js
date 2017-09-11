import React from 'react';
import {Carousel} from 'antd';
import PropTypes from 'prop-types';



export default class LoopImages extends React.Component {
  render() {
    const {images} = this.props;
    const imageStyle = {
      width:400,
      height:900/4
    };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };
    console.log(images);
    const imgs = images.map(function (image) {
        return (<img src={image} key={image} alt={image} />)
      }
    );

    return(
      <div className="carousel">
      <Carousel  {...settings} >
        {imgs}
      </Carousel>
      </div>
    )
  }
}

LoopImages.propTypes ={
  images:PropTypes.array.isRequired
};
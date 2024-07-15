import classNames from 'classnames';
import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: 0,
    };
  }
  handleNext = () => {
    const currIndex = this.state.activeImg;
    if (currIndex === this.props.images.length - 1)
      this.setState({ activeImg: 0 });
    else this.setState({ activeImg: currIndex + 1 });
  };
  handlePrev = () => {
    const currIndex = this.state.activeImg;
    if (currIndex === 0)
      this.setState({ activeImg: this.props.images.length - 1 });
    else this.setState({ activeImg: currIndex - 1 });
  };
  render() {
    const { images } = this.props;
    const { activeImg } = this.state;
    if (images?.length === 0) return <p>No images</p>;
    return (
      <div id='carousel' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          {images.map((el, index) => (
            <div
              className={classNames('carousel-item', {
                active: index === activeImg,
              })}
              key={el}
            >
              <img alt='' className='d-block w-100' src={el} />
            </div>
          ))}
        </div>
        <button
          className='carousel-control-prev'
          data-bs-target='#carousel'
          type='button'
          data-bs-slide='prev'
          onClick={this.handlePrev}
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          data-bs-target='#carousel'
          type='button'
          data-bs-slide='next'
          onClick={this.handleNext}
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    );
  }
}

Carousel.defaultProps = {
  images: [],
};
export default Carousel;

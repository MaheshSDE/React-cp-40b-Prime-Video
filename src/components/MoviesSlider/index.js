// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'
import './index.css'

const MovieSlider = props => {
  const {moviesList} = props

  /* const settings1 = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  } */

  const settings2 = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      {/* <div className="mobile-view-slider-container">
        <Slider {...settings1}>
          {moviesList.map(eachItem => (
            <MovieItem movieDetails={eachItem} key={eachItem.key} />
          ))}
        </Slider>
      </div> */}
      <div className="desktop-view-slider-container">
        <Slider {...settings2}>
          {moviesList.map(eachItem => (
            <MovieItem movieDetails={eachItem} key={eachItem.key} />
          ))}
        </Slider>
      </div>
    </>
  )
}
export default MovieSlider

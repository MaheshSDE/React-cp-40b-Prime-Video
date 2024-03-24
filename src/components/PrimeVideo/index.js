// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  const comedyMovieList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="action-movie-container">
        <h1 className="heading">Action Movies</h1>
        <MovieSlider moviesList={actionMovieList} />
      </div>
      <div className="comedy-movie-container">
        <h1 className="heading">Comedy Movies</h1>
        <MovieSlider moviesList={comedyMovieList} />
      </div>
    </div>
  )
}
export default PrimeVideo

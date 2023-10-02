// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => {
    return (
        <>
          <Header/>
          <div className="home-container">
            <div className="text-container">
              <h1>Clothes That Get You Noticed</h1>
              <p>Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you ure. So, celebrate the seasons new and exciting fashion in your own way</p>
              <button className="shop-button" type="button">Shop Now</button>
            </div>
            <img className="image" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="clothes that get you changed"/>
          </div>
        </>
    )
}

export default Home

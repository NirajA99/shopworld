import React from 'react';
import top1 from '../Assets/top1.jpg'
import Products from './Products';

function Home(props) {
    return (
        <div className="hero">
            <div className="card bg-dark text-dark border-0" >
  <img src={top1} className="card-img" alt="background" />
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-2 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p className="card-text fw-bold fs-3">CHECK OUT ALL THE TRENDS</p>
    </div>
  </div>
</div>
<Products />
        </div>
    );
}

export default Home;
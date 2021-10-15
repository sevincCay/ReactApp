import React from 'react'
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'
function Carousel() {
    return (
        <div>
            <div id="carouselExample" className="carousel carousel- slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={img1} className="d-block w-100" ></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Ankara</h5>
        <p>Dublex, 5+3, 450m² bahçeli,Şehir merkezine 1km uzaklıkta.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={img2} className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>İzmir</h5>
        <p>Dublex, 5+3, 450m² bahçeli,Şehir merkezine 1km uzaklıkta</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={img3} className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>İstanbul</h5>
        <p>Dublex, 5+3, 450m² bahçeli,Şehir merkezine 1km uzaklıkta</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carousel

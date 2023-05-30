import React from 'react'

export default function carousel() {
  return (
    <>
    <div className="container my-4 w-75">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner mr">
    <div className="carousel-item active">
      <img className="d-block w-100 carouselImg " src="./images/media/carousel 1.jpg" alt="First slide" />
    <div className="carousel-caption d-none d-md-block">
    <h1>Explore The Beauty</h1>
</div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carouselImg " src="./images/media/carousel 2.jpg" alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
    <h1>Explore The Beauty</h1>
</div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carouselImg " src="./images/media/carousel 3.jpg" alt="Third slide" />
      <div className="carousel-caption d-none d-md-block">
    <h1>Explore The Beauty</h1>
</div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon mr" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon mr" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
    </>
  )
}

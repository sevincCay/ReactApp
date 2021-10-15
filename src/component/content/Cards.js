import React from 'react'
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'

function Cards(props) {
    return (
        <div class="container">
            <div class="row">
                <div className="col-md-4">
                    <div class="card w-100 mt-5 mb-5">
                        <img src={props.houseData[1].image} class="card-img-top" alt="..."></img>
                        <div class="card-body" style={{height:"175px"}}>
                            <h5 class="card-title">{props.houseData[1].city}</h5>
                            <p class="card-text">{props.houseData[1].description}</p>
                            <a href="#" class="btn btn-primary">Daha fazla</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card w-100 mt-5 mb-5">
                        <img src={img2} class="card-img-top" alt="..."></img>
                        <div class="card-body" style={{height:"175px"}}>
                            <h5 class="card-title">{props.houseData[3].city}</h5>
                            <p class="card-text">{props.houseData[3].description}</p>
                            <a href="#" class="btn btn-primary">Daha fazla</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card w-100 mt-5 mb-5">
                        <img src={img3} class="card-img-top" alt="..."></img>
                        <div class="card-body" style={{height:"175px"}}>
                            <h5 class="card-title">{props.houseData[4].city}</h5>
                            <p class="card-text">{props.houseData[4].description}</p>
                            <a href="#" class="btn btn-primary">Daha fazla</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards

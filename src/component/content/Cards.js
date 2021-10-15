import React from 'react'
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'
function Cards() {
    return (
        <div class="container">
            <div class="row">
                <div className="col-md-4">
                    <div class="card w-100 mt-5 mb-5">
                        <img src={img1} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Ankara</h5>
                            <p class="card-text">Dublex, 5+3, 450m² bahçeli,Şehir merkezine 1km uzaklıkta.Daha fazla bilgi için bizimle iletişime geçin.</p>
                            <a href="#" class="btn btn-primary">Daha fazla</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card w-100 mt-5 mb-5">
                        <img src={img2} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">İzmir</h5>
                            <p class="card-text">Dublex, 5+3, 450m² bahçeli,Şehir merkezine 1km uzaklıkta.Daha fazla bilgi için bizimle iletişime geçin.</p>
                            <a href="#" class="btn btn-primary">Daha fazla</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card w-100 mt-5 mb-5">
                        <img src={img3} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">İstanbul</h5>
                            <p class="card-text">Dublex, 5+3, 450m² bahçeli,Şehir merkezine 1km uzaklıkta.Daha fazla bilgi için bizimle iletişime geçin.</p>
                            <a href="#" class="btn btn-primary">Daha fazla</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards

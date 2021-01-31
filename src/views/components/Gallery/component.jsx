import React, {Component} from 'react';
import './style.css'

//images
import img1 from '../../../images/wedding/Group 18.png'
import img2 from '../../../images/wedding/Group 17.png'
import img3 from '../../../images/wedding/Group 19.png'
import img4 from '../../../images/wedding/Group 20.png'
import img5 from '../../../images/wedding/Group 21.png'
import img6 from '../../../images/wedding/Group 22.png'

class component extends Component {
    // componentDidMount(){   let $window = $(window),       mobile =
    // $(document.getElementsByClassName('mb'));       function resize() {
    // if ($window.width() < 768) {             return mobile.addClass('col-6');
    // }         mobile.removeClass('col-6');     }     $window
    // .resize(resize)         .trigger('resize'); }
    render() {
        return (
            <div className="gallery m-4 p-3">
                <div className="row wb">
                    <div className="col-md-3">
                        <img src={img1} className="img-fluid m-2" alt="testi"/>
                        <img src={img2} className="img-fluid m-2" alt="testi"/>
                    </div>
                    <div className="col-md-4">
                        <img src={img3} className="img-fluid m-2" alt="testi"/>
                        <img src={img4} className="img-fluid m-2" alt="testi"/>
                    </div>

                    <div className="col-md-3">
                        <img src={img5} className="img-fluid m-2 drop-shadow" alt="testi"/>
                    </div>
                    <div className="col-md-2">
                        <img src={img6} className="img-fluid m-2" alt="testi"/>
                    </div>
                </div>
                <div className="row mb">
                    <div className="col-6">

                        <img src={img1} className="img-fluid m-2" alt="testi"/>
                        <img src={img5} className="img-fluid m-2 drop-shadow" alt="testi"/>

                        <img src={img6} className="img-fluid m-2" alt="testi"/>

                    </div>
                    <div className="col-6">
                        <img src={img3} className="img-fluid m-2" alt="testi"/>
                        <img src={img4} className="img-fluid m-2 float-right" alt="testi"/>
                        <img src={img2} className="img-fluid m-2" alt="testi"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default component;
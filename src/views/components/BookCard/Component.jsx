import React from "react";
import $ from 'jquery';
import './style.css'

const handleClass = () => {
    $( document ).ready(function() {
    let $window = $(window),
        mobile = $(document.getElementsByClassName('bmb'));
    function resize() {
        if ($window.width() < 767) {
            return mobile.addClass('mr-2').removeClass('mr-4');
        }
        else {
            return mobile.addClass('mr-4').removeClass('mr-2');
        }
    }
    $window
        .resize(resize)
        .trigger('resize');
    });
}

export default function Component(props) {
    handleClass();
if (props.mode === 1) {
    return (
        <div className="box">
            <a href="https://inviding.liwa-alex.my.id">
                <button className="gs mr-2">Get Started</button>
            </a>
            <p className="p mr-2">or</p>
            <a href="https://inviding.liwa-alex.my.id">
                <button className="bmb lm mr-4">Learn More</button>
            </a>
        </div>
    );
} else if (props.mode === 2) {
    return (
        <div className="no-box">
            <a href="https://inviding.liwa-alex.my.id">
                <button className="gs mr-2">Get Started</button>
            </a>
            <p className="p mr-2">or</p>
            <a href="https://inviding.liwa-alex.my.id" className="bmb lm-2 mr-4">
                <div>
                    Learn More
                </div>
            </a>
        </div>
    );
} else {
    return (
        <div className="large-box">
            <div className="tag mr-3">
                Build your wedding invitation
            </div>
            <div className="button-grup">
                <a href="https://inviding.liwa-alex.my.id">
                    <button className="gs mr-2">Get Started</button>
                </a>
                <p className="p mr-2 mb">or</p>
                <a href="https://inviding.liwa-alex.my.id">
                    <button className="lm mr-4">Learn More</button>
                </a>
            </div>
        </div>
    );
}
}
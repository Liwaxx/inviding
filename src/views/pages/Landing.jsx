import React, {Component} from 'react'
import {Container} from 'reactstrap'

import Navbar from '../components/Navbar/Component'
import BookCard from '../components/BookCard/Component'
import Gallery from '../components/Gallery/component'

import '../styles/Landing.css'

//images
import Leaf from '../../images/leaf-1.png'
import Flower from '../../images/flower.png'
import BlurLeaf from '../../images/blur-leaf.png'
import FootBlurLeaf from '../../images/blur-leaf-3.png'
import CenterBlurLeaf from '../../images/blur-leaf-2.png'
import Letter from '../../images/letter.png'
import Page4 from '../../images/page-4.png'
import Page1Mb from '../../images/page-1-mb.png'
import Logo from '../../images/inviding.png'

class Landing extends Component {

    render() {
        return (
            <div className="body">
                <div className="page-1">
                    <div className="position-absolute c-leaf-m">
                        <img src={CenterBlurLeaf} className="img-fluid" alt="leaf"/>
                    </div>
                    <div className="position-absolute pencil-mb">
                        <img src={Page1Mb} className="img-fluid" alt="leaf"/>
                    </div>
                    <Navbar/>
                    <Container>
                        <div className="tagline row">
                            <div className="col-md-6">
                                <div className="title mt-4">Perfect Wedding
                                    <br/>
                                    Invitation</div>
                                <p className="tagline-desc mt-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </Container>
                    <div className="mt-5">
                        <BookCard mode={1}/>
                    </div>
                </div>
                <div className="page-2 pt-3 position-relative">
                    <img src={Leaf} className="img-fluid m-3 position-absolute top-left" alt=""/>
                    <img src={BlurLeaf} className="img-fluid position-absolute bot-right" alt=""/>
                    <Container>
                        <div className="text-center">
                            <p className="tagline-desc mt-4">
                                OUR CLIENT WEDDING
                            </p>
                            <div className="title mt-4">
                                Design your invitation like
                                <br/>
                                designing your wedding
                            </div>
                        </div>
                    </Container>
                    <Gallery/>
                </div>
                <div className="position-relative">
                    <div className="position-absolute c-leaf">
                        <img src={CenterBlurLeaf} className="img-fluid" alt="leaf"/>
                    </div>
                    <div className="page-3 pt-3 mb-5">
                        <Container>
                            <div className="row">
                                <div className="col-md-6 desc">
                                    <p className="tagline-desc mt-4">
                                        OUR PRODUCT
                                    </p>
                                    <div className="img-mb">
                                        <img src={Letter} alt="" className="img-fluid mt-5"/>
                                    </div>
                                    <div className="title mt-4 mb-4">
                                        Best Wedding
                                        <br/>
                                        E-Invitation
                                    </div>
                                    <p className="tagline-desc mt-5 mb-5">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <div className="bk2">
                                        <BookCard mode={2}/>
                                    </div>
                                </div>
                                <div className="col-md-6 img-wb">
                                    <img src={Letter} alt="" className="img-fluid mt-5"/>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className="page-4 pt-4 mb-5">
                        <Container>
                            <div className="row">
                                <div className="col-md-6 img-wb">
                                    <img src={Page4} alt="" className="img-fluid w-75"/>
                                </div>
                                <div className="col-md-6">
                                    <p className="tagline-desc mt-4">
                                        OUR PRODUCT
                                    </p>
                                    <div className="img-mb">
                                        <img src={Page4} alt="" className="img-fluid w-75 mt-5"/>
                                    </div>
                                    <div className="title mt-4 mb-4">
                                        Give the best greeting
                                        <br/>
                                        to your guests
                                    </div>
                                    <p className="tagline-desc mt-5 mb-5">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <div
                                        className="bk2">
                                        <BookCard mode={2}/>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
                <div className="page-5 position-relative">
                    <div className="flower">
                        <img src={Flower} className="img-fluid" alt="leaf"/>
                    </div>
                    <Container>
                        <div className="row">
                            <div className="col-md-6 f-end">
                                <p className="tagline-desc mt-4">
                                    CUSTOMER SERVICE & SECURITY
                                </p>
                                <div className="title mt-4 mb-4">
                                    We’ve got you covered!
                                </div>
                                <p className="tagline-desc mt-5 t-left">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="col-md-6 f-end">
                                <p className="tagline-desc t-right">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </Container>

                    <div className="merge position-absolute">
                        <img
                            src={Leaf}
                            className="img-fluid position-absolute"
                            alt="leaf"
                            id="FootLeaf"/>
                        <BookCard mode={3}/>
                    </div>
                </div>
                <div className="wrapper pb-3">
                    <div className="footer">
                        <div
                            className="container f-wb"
                            style={{
                                marginBottom: '5%'
                            }}>
                            <div
                                className="row"
                                style={{
                                    marginBottom: '6%'
                                }}>
                                <div className="col-md-4">
                                    <img src={Logo} alt="Logo" className="img-fluid"/>
                                </div>
                                <div className="col-md-3 footer-link">
                                    <p className="mb-4">COMPANY</p>
                                    <a href="https://inviding.liwa-alex.my.id">Mission and fission</a>
                                    <a href="https://inviding.liwa-alex.my.id">Careers</a>
                                </div>
                                <div className="col-md-2 footer-link">
                                    <p className="mb-4">SUPPORT</p>
                                    <a href="https://inviding.liwa-alex.my.id">Planner</a>
                                    <a href="https://inviding.liwa-alex.my.id">Team</a>
                                </div>
                                <div className="col-md-3 footer-link">
                                    <p className="mb-4">COMMUNITY</p>
                                    <a href="https://inviding.liwa-alex.my.id">Help and Support</a>
                                    <a href="https://inviding.liwa-alex.my.id">FAQ</a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="container f-mb"
                            style={{
                                marginBottom: '5%'
                            }}>
                            <div className="row">
                                <div className="col-6">
                                    <div
                                        className="row"
                                        style={{
                                            marginBottom: '6%'
                                        }}>
                                        <div className="col-md-3 footer-link">
                                            <p className="mb-4">COMPANY</p>
                                            <a href="https://inviding.liwa-alex.my.id">Mission and fission</a>
                                            <a href="https://inviding.liwa-alex.my.id">Careers</a>
                                        </div>
                                        <div className="col-md-2 footer-link">
                                            <p className="mb-4">SUPPORT</p>
                                            <a href="https://inviding.liwa-alex.my.id">Planner</a>
                                            <a href="https://inviding.liwa-alex.my.id">Team</a>
                                        </div>
                                        <div className="col-md-3 footer-link">
                                            <p className="mb-4">COMMUNITY</p>
                                            <a href="https://inviding.liwa-alex.my.id">Help and Support</a>
                                            <a href="https://inviding.liwa-alex.my.id">FAQ</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <img src={Logo} alt="Logo" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <img
                            src={FootBlurLeaf}
                            className="img-fluid position-absolute fbl"
                            alt="blur-leaf"
                            style={{
                                right: 0
                            }}/>
                    </div>
                    <div className="copyright">
                        All right reserved | invinding.com
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
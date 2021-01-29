import React from 'react'
import {devUrl} from '../../config/index'
import './intro.scss'
function Intro() {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="c-intro">
                <div className="c-10 row">
                    <div className="col-md-1"></div>
                    <div className="col-md-11 c-about">
                        <figure>
                            <img src={devUrl+'/images/index/ourmission.jpg'} alt="" />
                        </figure>
                    </div>
                </div>
                <div className="c-100 row">
                    <div className="col-md-7"></div>
                    <div className="col-md-5">
                        <div className="c-whoweare">
                            <p className="c-title h2">關於植園</p>
                            <p className="c-70 h4">Who We Are</p>
                            <p>植園以室內植栽租借、空間綠化、植物相關工作坊與教學課程等，為主要服務內容，希望可以藉由植栽設計、搭配盆器選品，改變室內空間的氣氛。</p>
                        </div>
                    </div> 
                    <div className="col-md-2"></div>
                    <div className="col-md-4 m-0 p-0">
                        <div className="c-mission">
                            <p className="c-title h2">植園的使命</p>
                            <p className="c-70 h4">Our Mission</p>
                            <p >植園的使命是透過植物租賃服務，以及室內植物相關課程與工作坊，將綠化的概念帶入現代生活，提升空間品質。</p>
                            <div className="c-gbutton">布景案例</div>
                        </div>
                    </div>
                    <div className="col-md-5 c-Ourmission">
                        <figure>
                            <img src={devUrl+'/images/index/aboutus.jpg'} alt="" />
                        </figure>
                    </div>
                </div>
                <div className="c-testback"></div>
            </div>
        </div>
    )
}

export default Intro

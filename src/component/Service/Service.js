import React from 'react'
import service from './serviceflow'
import './Service.scss'
function Service() {
  return (
    <>
      <div className="container-fluid p-0 ">
        <div className="c-service-vh c-paddd">
          <div className="row d-flex justify-content-center p-0">
            <div className="">
              <div className="h1 text-center">植物租賃服務</div>
              <div className="h4 text-center" style={{color:'#838383'}}>Leasing Service of Plants</div>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-12">
              <div className="row c-margin-top justify-content-center">
                {service.info.map((ele) => (
                  <>
                    <div key={ele.flow_id} className={ele.card_class}>
                      <div className={ele.svg_name}></div>
                      <div className={ele.step_class}>{ele.step}</div>
                      <div className={ele.servic_class}>{ele.service_name}</div>
                    </div>
                    <div className={ele.box}>
                      <img src={ele.link} alt=""/>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service

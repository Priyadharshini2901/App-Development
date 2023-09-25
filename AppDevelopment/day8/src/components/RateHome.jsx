import React from 'react'

function RateHome() {
  return (
    <div>
        <div className="row center-align " style={{ margin: "0 auto", padding: "100px 47px 100px 47px" }}>
          <div className="row l12 m12 safe_portn" style={{ float: "none", margin: "0 auto" }}>
           <div className=" col s3 m3 l3"style={{textAlign: "center", padding: 15,display: "flex",alignItems: "center" }}> 
            <div className="img_left">
                 <img  className="responsive-img ls-is-cached lazyloaded"
                  src="https://assets.winni.in/groot/2022/07/22/homepage/desktop/servicesafe.png?w=115"
                 style={{ width: "100%", height: "100%",alignItems:'end' }}
                />
            </div>
            <div className="content_right" style={{textAlign: "left",fontWeight: "bold",lineHeight: "118%",paddingLeft: 15, width: "100%"}}>
               <div style={{ lineHeight: 2, color: "#F24B7E", fontSize: 20 }}>
                Safe &amp; Hygienic
               <span style={{ color: "#333333", fontSize: 18, display: "block" }}>
                Bakery
               </span>
               </div>
            </div>
          </div>
      <div className=" col s3 m3 l3" style={{ textAlign: "center", padding: 15,display: "flex",alignItems: "center" }}>
        <div className="img_left">
          <img className="responsive-img ls-is-cached lazyloaded"
           src="https://assets.winni.in/groot/2022/07/22/homepage/desktop/servicedelivery.png?w=115"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="left"style={{ textAlign: "left",fontWeight: "bold",lineHeight: "118%",paddingLeft: 15, width: "100%"}}>
          <div style={{ lineHeight: 2, color: "#F24B7E", fontSize: 20 }}> Delivery In 700+{" "}
            <span style={{ color: "#333333", fontSize: 18, display: "block" }}>
              Cities
            </span>
          </div>
        </div>
      </div>
      <div className=" col s3 m3 l3" style={{textAlign: "center",padding: 15, display: "flex", alignItems: "center" }}>
        <div className="img_left">
          <img className="responsive-img ls-is-cached lazyloaded"
            src="https://assets.winni.in/groot/2022/07/22/homepage/desktop/servicetrust.png?w=115"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="left" style={{ textAlign: "left",fontWeight: "bold",lineHeight: "118%", paddingLeft: 15,width: "100%"}}>
          <div style={{ lineHeight: 2, color: "#F24B7E", fontSize: 20 }}>
            20 Million People{" "}
            <span style={{ color: "#333333", fontSize: 18, display: "block" }}>
              Trust Us
            </span>
          </div>
        </div>
      </div>
       <div className=" col s3 m3 l3" style={{textAlign: "center",padding: 15,display: "flex",alignItems: "center"}}>  
         <div className="img_left">
          <img
            className="responsive-img ls-is-cached lazyloaded"
            src="https://assets.winni.in/groot/2022/07/22/homepage/desktop/servicepincode.png?w=115"
            style={{ width: "100%", height: "100%" }}
          />
        </div> 
         <div className="left" style={{textAlign: "left",fontWeight: "bold",lineHeight: "118%",paddingLeft: 15,width: "100%"}}> 
           <div style={{ lineHeight: 2, color: "#F24B7E", fontSize: 20 }}>
            18000+ Pincodes{""}
            <span style={{ color: "#333333", fontSize: 18, display: "block" }}>
              Serviced Till Date
            </span>
          </div>
        </div>
      </div>
    </div> 
  </div>
  </div>

  )
}

export default RateHome
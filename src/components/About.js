import React from "react";

export default function About(props) {
  // const [myStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? 'white':'#041222',
    backgroundColor: props.mode === "dark" ? '#023258':'white',

  }

  // const [btnText, setbtnText] = useState("Enable Dark Mode")

  // const modeChange = ()=>{
  //     if(myStyle.color === "white"){
  //         setMyStyle({
  //             color: "black",
  //             backgroundColor : "white",
  //             border: "1px solid white"
  //         })
  //         setbtnText("Enable Light Mode")
  //     }
  //     else{
  //         setbtnText("Enable Light Mode")
  //         setMyStyle({
  //             color: "white",
  //             backgroundColor : "black"
  //         })
  //         setbtnText("Enable Dark Mode")
  //     }
  // }

  return (
    <div className="container">
      <div>
        <h2 style={{color: props.mode === "dark" ? 'white':'#041222'}}>About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Analyze your text.
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  This is the first item's accordion body.This is the first
                  item's accordion body.This is the first item's accordion
                  body.This is the first item's accordion body.This is the first
                  item's accordion body.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  This is the second item's accordion body.This is the second
                  item's accordion body.This is the second item's accordion
                  body.This is the second item's accordion body.This is the
                  second item's accordion body.This is the second item's
                  accordion body.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Browser compitible.
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  This is the third item's accordion body.This is the third
                  item's accordion body.This is the third item's accordion
                  body.This is the third item's accordion body.This is the third
                  item's accordion body.This is the third item's accordion body.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Productpage from "./Productpage";
const DATA = [
	{
		img1: "link1",
		img2: "link2",
		img3: "link3",
	},
];
 

// const productSize = ["S", "M", "X", "XXL"];
//   //map
//   const sizeData = productSize?.map((item) => ({
//     id: `input_${item}`,
//     value: item,
//   }));
//   let [sizeValue, setSizeValue] = useState("");
//   console.log(sizeValue);


//     this.state = {
//       name: "React"
//     };
//     this.onChangeValue = this.onChangeValue.bind(this);
//   

 

class Productpage extends React.Component {
    constructor() {
        super();
        this.state = {
          colors: "color 1",
          sizes: "small"
        };
      }
      render() {
        return (
    <div>
    <h2 className="size-choice">SIZE</h2>
    <div className="sizebutton-style">
      <input
        onChange={(e) => this.setState({ sizes: e.target.value })}
        className="hidden_radio"
        type="radio"
        id="small"
        name="colors"
        value="small"
      />
      <label
        className={`${
          this.state.sizes === "small" ? "button-selected" : "button"
        }`}
        for="small"
      >
        small
      </label>
      <input
        onChange={(e) => this.setState({ sizes: e.target.value })}
        className="hidden_radio"
        type="radio"
        id="medium"
        name="colors"
        value="medium"
      />
      <label
        className={`${
          this.state.sizes === "medium" ? "button-selected" : "button"
        }`}
        for="medium"
      >
        medium
      </label>
      <input
        onChange={(e) => this.setState({ sizes: e.target.value })}
        className="hidden_radio"
        type="radio"
        id="large"
        name="colors"
        value="large"
      />
      <label
        className={`${
          this.state.sizes === "large" ? "button-selected" : "button"
        }`}
        for="large"
      >
        large
      </label>
      <input
        onChange={(e) => this.setState({ sizes: e.target.value })}
        className="hidden_radio"
        type="radio"
        id="xlarge"
        name="colors"
        value="xlarge"
      />
      <label
        className={`${
          this.state.sizes === "xlarge" ? "button-selected" : "button"
        }`}
        for="xlarge"
      >
        xlarge
      </label>
    </div>

    <h2 className="color-choice">COLOR</h2>

    <div className="colorbutton-style">
      <input
        onChange={(e) => this.setState({ colors: e.target.value })}
        className="hidden_radio"
        type="radio"
        id="color1"
        name="colors"
        value="color 1"
      />
      <label
        className={`${
          this.state.colors === "color 1" ? "button-selected" : "button"
        }`}
        for="color1"
      >
        color 1
      </label>
      <input
        onChange={(e) => this.setState({ colors: e.target.value })}
        className="hidden_radio"
        type="radio"
        id="color2"
        name="colors"
        value="color 2"
      />
      <label
        className={`${
          this.state.colors === "color 2" ? "button-selected" : "button"
        }`}
        for="color2"
      >
        color 2
      </label>
    </div>
    </div>
   
           
		);
	}
}

export default Productpage;

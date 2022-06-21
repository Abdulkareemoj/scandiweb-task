import React from "react";

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

// constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//     this.onChangeValue = this.onChangeValue.bind(this);
//   }

 

class Productpage extends React.Component {
	render() {
		const { productImage, img1, img2, img3, price, productName,productItem } = this.props;
		return (
			<div className="page-container  container containerpall">
				<div className="product-thumbnail">
					<img
						src={img1}
						className="product-thumbnail"
						alt={`${productName}`}
					/>
					<img
						src={img2}
						className="product-thumbnail"
						alt={`${productName}`}
					/>
					<img
						src={img3}
						className="product-thumbnail"
						alt={`${productName}`}
					/>
				</div>
				<div className="product-image">
					<img src={productImage} alt={`${productName}`} />
				</div>
				<div className="product-details">
					<strong>
						{" "}
						<p className="product-name"> {productName}</p>
					</strong>
					<p className="product-item">{productItem}</p>
					<h2 className="size-choice">SIZE</h2>
					{/* <div onChange={this.onChangeValue}>  */}
					<input className="size-style" type="radio" value="XS" name="size" /> XS
					<input className="size-style"  type="radio" value="S" name="size" /> S
					<input className="size-style" type="radio" value="M" name="size" /> M
					<input className="size-style" type="radio" value="L" name="size" /> L
					{/* </div> */}

					{/* <div className="main max-w-lg mx-auto">
      <div className="grid grid-cols-4 gap-8 gap-y-4">
        {sizeData?.map(({ id, value }) => (
          <div className="-mt-2" key={id}>
            <input
              id={id}
              className="invisible radio_custom"
              type="radio"
              value={value}
              checked={sizeValue === { sizeValue }}
              onChange={(e) => {
                const nodes = e.target.parentElement.parentElement.childNodes;
                for (let i = 0; i < nodes.length; i++) {
                  nodes[i].lastChild.firstChild.classList.remove("show_border");
                }
                e.target.nextSibling.firstChild.classList.toggle("show_border");
                return setSizeValue(e.target.value);
              }}
            />
            <label htmlFor={id} className="radio_custom_label">
              <div
                className={`border border-gray-300 py-3 text-center cursor-pointer "
                        }`}
              >
                {value}
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}; */}


						<h2 className="color-choice">COLOR</h2>
					<input type="radio" value="Male" name="color1" /> Male
					<input type="radio" value="color2" name="size" /> Female
					<input type="radio" value="color3" name="size" /> Other
					<h2 className="price-choice">PRICE</h2>
					<p className="product-price">{price}</p>
					<input className="cta-utto" type="button" value="ADD TO CART" name="ADD" /> </div>{" "}
			</div>
		);
	}
}
export default Productpage;

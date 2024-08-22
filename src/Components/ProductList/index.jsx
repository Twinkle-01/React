import { useEffect } from "react";
import Button from "../button/button";

const ProductList = ({ title, productList}) => {
    const add_to_cart = (name) => {
        console.log("Product added to Cart:",name);
    }
    useEffect(() =>{
        console.log("Good day");
    },[])
    

    return (
        <div>
            <h2>{title}</h2>
            <div className='flex gap'>
                {
                    productList.map(product => {
                        return (
                            <div className="card" key={product.id}>
                                <div className="box">
                                    <img src={product.img} alt="" width="100%" height="100%" style={{objectFit:"cover"}}/>
                                </div>
                                <div className="details">
                                    <p className='overflow-elipses'>{product.name}</p>
                                    <h3>{product.price}</h3>
                                    {/* <button className="btn">Add to Cart</button> */}
                                    <Button value="Add to Cart" style={"btn-border"} handleClick={add_to_cart} productName={product.name}  />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ProductList;
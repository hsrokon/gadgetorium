import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocalStorageWL, removeFromLSWL } from "../../utils/forWishlist";
import WishListProduct from "./WishListProduct";
import { FaHeartCirclePlus } from "react-icons/fa6";



const Wishlist = () => {

    useEffect(()=> {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => handleWLProducts(data))
    },[])

    const [WListedProducts, setWListedProducts] = useState([]);

    

    const handleWLProducts = products => {
        const LSids = getLocalStorageWL();
        const listedProducts = products.filter(product=> LSids.includes(product.product_id))
        setWListedProducts(listedProducts);
    }


    const handleDeleteWLProduct = id => {
        removeFromLSWL(id)
        const updatedWLLS = getLocalStorageWL();
        const updatedWL = WListedProducts.filter(product=> updatedWLLS.includes(product.product_id))
        setWListedProducts(updatedWL);
    }

    return (
        <div className="w-10/12 mx-auto mt-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center my-8 md:my-4">
                <h2 className="font-bold text-xl md:text-2xl">Wishlist</h2>

            </div>
            <div className="flex flex-col items-start gap-2">
                {
                    WListedProducts.map(product=> <WishListProduct
                        key={product.product_id} 
                        product={product}
                        handleDeleteWLProduct={handleDeleteWLProduct}
                    ></WishListProduct>)
                }
            </div>
            <div className="flex flex-col items-center mt-6">
                {WListedProducts.length=== 0 && (<div>
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-4xl font-bold">No products added to wishlist.</h2>
                        <p className="text-sm font-semibold flex items-center gap-2 ">Click on <FaHeartCirclePlus className="text-purple-600" />to add product...</p>
                        <Link to={{pathname: '/', hash: '#products'}} state={{fromCart: true}}>
                            <button className="text-9xl cursor-pointer"><FaHeartCirclePlus className="text-purple-600"/></button>
                        </Link>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Wishlist;
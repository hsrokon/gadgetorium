import { useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/utils";
import CartProduct from "./CartProduct";
import { BiSortAlt2 } from "react-icons/bi";


const Cart = () => {

    useEffect(()=> {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => handleCartProducts(data))
    },[])

    const [totalCartMoney, setTotalCartMoney] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    

    const handleCartProducts = products => {
        const LSids = getLocalStorage();
        const cartedProducts = products.filter(product=> LSids.includes(product.product_id))//includes() expects a string when called on another string.
        setCartProducts(cartedProducts);

        //money calc
        const totalMoney = cartedProducts.reduce((sum, product) => sum + product.price, 0);//sum: starts at 0 (the initial value).
        setTotalCartMoney(totalMoney);
    }

    return (
        <div className="w-10/12 mx-auto mt-8">
            <div className="flex justify-between items-center my-4">
                <h2 className="font-bold text-2xl">Cart</h2>
                <div className="flex gap-6 ">
                    {/* formatting */}
                <h2 className="text-xl font-bold">
                Total cost: {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(totalCartMoney)}
                </h2>
                    <button className="font-semibold border-2 border-purple-600 text-purple-600
                    flex items-center gap-1 px-4 py-1 rounded-full">Sort by Price <BiSortAlt2 /></button>
                    <button className="text-lg bg-purple-600 text-white px-4 py-1.5 rounded-full">Purchase</button>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2">
                {
                    cartProducts.map(product=> <CartProduct key={product.product_id} product={product}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;
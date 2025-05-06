import { useEffect, useState } from "react";
import { getLocalStorage, removeFromLS } from "../../utils/forCart";
import CartProduct from "./CartProduct";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";


const Cart = () => {

    useEffect(()=> {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => handleCartProducts(data))
    },[])

    const [totalCartMoney, setTotalCartMoney] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [cartSortProducts, setCartSortProducts] = useState([]);
    

    const handleCartProducts = products => {
        const LSids = getLocalStorage();
        const cartedProducts = products.filter(product=> LSids.includes(product.product_id))//includes() expects a string when called on another string.
        setCartProducts(cartedProducts);
        setCartSortProducts(cartedProducts);
    }

    useEffect(()=> {
        const totalMoney = cartProducts.reduce((sum, product) => sum + product.price, 0);//sum: starts at 0 (the initial value).
        setTotalCartMoney(totalMoney);
    } ,[cartProducts])

    const handleSort =  sortType  => {
        if (sortType==='no') {
            setCartSortProducts(cartProducts);
        } else if (sortType==='price'){
            const priceSort = [...cartProducts].sort((a, b) => b.price - a.price)
            setCartSortProducts(priceSort)
        } else {
            const ratingSort = [...cartProducts].sort((a, b) => b.rating - a.rating)
            setCartSortProducts(ratingSort)
        }
    }

    const handleDeleteCartProduct = id => {
        removeFromLS(id)
        const updatedCartLS = getLocalStorage();
        const updatedCart = cartProducts.filter(product=> updatedCartLS.includes(product.product_id))
        setCartProducts(updatedCart);
        setCartSortProducts(updatedCart);
    }

    return (
        <div className="w-10/12 mx-auto mt-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center my-8 md:my-4">
                <h2 className="font-bold text-xl md:text-2xl">Cart</h2>
                <div className="flex border-y md:border-0 border-purple-300 py-4 md:py-0 gap-2 md:gap-4 lg:gap-6 ">
                    {/* formatting */}
                <h2 className="text-sm md:text-lg lg:text-xl font-bold">
                Total cost: {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(totalCartMoney)}
                </h2>
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className=" font-semibold border-2 border-purple-600 text-purple-600
                        flex items-center gap-0.5 md:gap-1 
                    px-1.5 py-2 text-sm md:text-base md:px-3 md:py-1 lg:px-4 lg:py-2 rounded-full cursor-pointer">Sort <BiSortAlt2 /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <button 
                            onClick={()=> handleSort('price')}
                            className="bg-gray-100 rounded-2xl py-1 cursor-pointer text-purple-600 my-1 font-semibold flex items-center gap-2 justify-center">by Price <span className="text-lg text-yellow-500"><AiFillDollarCircle /></span></button>
                            <button 
                            onClick={()=> handleSort('rating')}
                            className="bg-gray-100 rounded-2xl py-1 cursor-pointer text-purple-600 my-1 font-semibold">by Rating ⭐</button>
                            <button 
                            onClick={()=> handleSort('no')}
                            className="bg-gray-100 rounded-2xl py-1 cursor-pointer text-purple-600 my-1 font-semibold flex items-center gap-2 justify-center">No sort <span className="text-lg text-yellow-700 bg"><IoIosCloseCircleOutline /></span></button>
                        </ul>
                    </div>

                    <button className=" bg-purple-600 text-white px-2 md:px-3 md:py-1 lg:px-4 lg:py-2 text-xs md:text-base cursor-pointer rounded-full">Purchase</button>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2">
                {
                    cartSortProducts.map(product=> <CartProduct 
                        key={product.product_id} 
                        product={product}
                        handleDeleteCartProduct={handleDeleteCartProduct}></CartProduct>)
                }
            </div>
            <div className="flex flex-col items-center mt-6">
                {cartProducts.length=== 0 && (<div>
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-4xl font-bold">No products added to cart</h2>
                        <p className="text-sm font-semibold flex items-center gap-2">Click on <BiCartAdd className="text-purple-600 text-lg"/> to add product...</p>
                        <Link to={{pathname: '/', hash: '#products'}} state={{fromCart: true}}>
                        {/* fromCart: true is important to check if I'm from empty cart */}
                            <button className="text-9xl cursor-pointer"><BiCartAdd className="text-purple-600"/></button>
                        </Link>
                    </div>
                </div>)}
            </div>
            <div className="flex justify-center">
                {
                    cartProducts.length!==0 && (
                        <Link to={{pathname: '/', hash: '#products'}} state={{fromCart: true}}><button 
                    className="btn btn-primary bg-purple-600 border-0 rounded-full w-fit text-xs lg:text-sm">
                        Go to products
                    </button></Link>)
                }
            </div>
        </div>
    );
};

export default Cart;
import { RxCrossCircled } from "react-icons/rx";

const CartProduct = ({product, handleDeleteCartProduct}) => {

    const {product_id, product_title, product_image, description, price, rating} = product;

    return (
        <div className="bg-base-300 w-full px-6 py-4 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 justify-between">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="h-36 md:h-24">
                        <img 
                        className="h-full object-cover md:object-contain rounded-xl"
                        src={product_image} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg lg:text-2xl font-semibold">{product_title}</h2>
                        <p className="text-gray-500">{description}</p>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <p className="font-semibold">Price: {price}</p>
                            <p className="font-semibold">Rating: {rating}</p>
                        </div>
                </div>
            </div>
            <button 
            className="text-2xl text-red-600 cursor-pointer"
            onClick={()=> handleDeleteCartProduct(product_id)}><RxCrossCircled /></button>
            </div>
            
        </div>
        
    );
};

export default CartProduct;
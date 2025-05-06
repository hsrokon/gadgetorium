import { RxCrossCircled } from "react-icons/rx";

const CartProduct = ({product}) => {

    const {product_title, product_image, description, price} = product;

    return (
        <div className="bg-base-300 w-full px-6 py-4 rounded-2xl">
            <div className="flex justify-between">
                <div className="flex gap-6">
                    <div className="h-24">
                        <img 
                        className="h-full rounded-xl"
                        src={product_image} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">{product_title}</h2>
                        <p className="text-gray-500">{description}</p>
                        <p className="font-semibold">Price: {price}</p>
                </div>
            </div>
            <button className="text-2xl text-red-600 cursor-pointer"><RxCrossCircled /></button>
            </div>
            
        </div>
        
    );
};

export default CartProduct;
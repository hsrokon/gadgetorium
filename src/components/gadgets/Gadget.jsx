import { Link } from "react-router-dom";


const Gadget = ({gadget}) => {

    const {product_id, product_image, price, rating, product_title, description} = gadget;

    return (
        <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm h-[28rem]">
            <figure className="px-10 pt-8">
                <img
                src={product_image}
                alt="Shoes"
                className="rounded-xl h-56 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <div className="flex gap-2">
                    <p>Price: <span className="font-semibold">{price}</span></p>
                    <p>Rating: <span className="font-semibold">{rating}⭐</span></p>
                </div>
                <div className="card-actions">
                <Link to={`products/${product_id}`}><button className="py-2 rounded-2xl btn btn-neutral btn-outline 
                bg-purple-600 text-white border-purple-600 
                hover:bg-white hover:text-purple-600 hover:shadow-none ">View details</button></Link>
                
                </div>
            </div>
        </div>
    );
};

export default Gadget;
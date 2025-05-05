import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const DetailsProduct = () => {

    const data = useLoaderData();
    const navigate = useNavigate() 
    const {productId} = useParams()
    
    const specificData = data.find(product=> product.product_id===productId)
    const {product_id, product_title, product_image, category, price, description, specification, availability, rating} = specificData;
    
    const handleGoBack = ()=> {
        navigate(-1);
    }

    return (
        <div className="hero bg-base-200 min-h-auto py-10">
            <div className="hero-content flex-col lg:flex-row">
                <img
                src={product_image}
                className="max-w-xl rounded-lg shadow-2xl"
                />
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-bold">{product_title}</h1>
                    <p className="text-lg font-semibold">Price: ${price}</p>
                    <button 
                    className={`text-left w-fit px-3 py-1 border text-sm rounded-full font-semibold
                    ${availability? 'bg-green-50 text-green-700 border-green-700' : 'bg-red-200 text-red-700 border-red-700'}`}>
                        {`${availability? 'In Stock' : 'Out of Stock'}`}</button>
                    <p className="text-gray-600">{description}</p>
                    <div>
                        <h3 className="font-semibold">Specification</h3>
                        <div>
                            {specification.map((spec, idx) => 
                            <p className="ml-1 text-gray-600" key={idx}>{`${idx+1}. ${spec}`}</p>)}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <p className="font-semibold">Rating: <span className="text-gray-500">{rating}</span></p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                    </div>
                        <div className="flex gap-1">
                            <button className="btn btn-primary bg-purple-600 border-0 rounded-full">Add to cart 
                                <span className="text-xl"><IoCartOutline /></span></button>
                            <button className="btn btn-primary bg-purple-600 border-0 rounded-full"><FaRegHeart /></button>
                        </div>
                        <button 
                        className="btn btn-primary bg-purple-600 border-0 rounded-full w-fit"
                        onClick={handleGoBack}
                        >Go back to products</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;
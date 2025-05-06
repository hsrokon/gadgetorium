import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { setLocalStorage } from "../../utils/forCart";
import { setLocalStorageWL } from "../../utils/forWishlist";


const DetailsProduct = () => {

    const data = useLoaderData();    
    const {productId} = useParams()
    const navigate = useNavigate(); 

    
    const specificData = data.find(product=> product.product_id===productId)
    const {product_id, product_title, product_image, price, description, specification, availability, rating} = specificData;
    
    const handleGoBack = ()=> {
        navigate(-1);
    }

      
    //scroll to details fixed
    const detailsRef = useRef(null);  
    useEffect(()=> {
        detailsRef.current?.scrollIntoView({behavior: "smooth"});
    }, []);

    const handleSaveCartToLS = id => {
        setLocalStorage(id);
    }

    const handleSaveWLtoLS = id => {
        setLocalStorageWL(id)
    }


    return (
        <div className="relative mb-[35rem] lg:mb-[25rem]">
            <div className="bg-purple-600 text-white text-center pt-8 pb-30 lg:pb-56">
                <h2 className="text-3xl font-bold py-3">Products Details</h2>
                <p className="text-xs md:text-sm w-11/12 md:w-9/12 lg:w-7/12 mx-auto">Discover everything you need to know about your next favorite gadget — from detailed specifications and features to pricing and availability. Make confident choices with all the insights in one place </p>
            </div>
            <div ref={detailsRef} className="hero scroll-mt-52 md:scroll-mt-32 w-11/12 lg:w-10/12 bg-base-200 min-h-auto lg:p-4 rounded-2xl lg:h-[40rem] text-sm lg:text-base

                    absolute left-1/2 transform -translate-x-1/2 -bottom-[37rem] md:-bottom-[34.5rem] lg:-bottom-[28rem]">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="max-w-xs lg:max-w-sm xl:max-w-xl h-56 lg:h-auto">
                        <img
                           src={product_image}
                           className=" object-cover h-full rounded-lg shadow-2xl"
                        />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h1 className="text-lg lg:text-5xl font-bold">{product_title}</h1>
                        <p className="lg:text-lg font-semibold">Price: ${price}</p>
                        <button 
                        className={`text-left w-fit px-3 py-1 border text-xs lg:text-sm rounded-full font-semibold
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
                                <button 
                                onClick={()=> handleSaveCartToLS(product_id)}
                                className="btn btn-primary bg-purple-600 border-0 rounded-full text-xs lg:text-sm">Add to cart <span className="text-xl"><IoCartOutline /></span>
                                </button>
                                
                                <button 
                                onClick={()=> handleSaveWLtoLS(product_id)}
                                className="btn btn-primary bg-purple-600 border-0 rounded-full">
                                <FaRegHeart /></button>

                            </div>
                            <button 
                            className="btn btn-primary bg-purple-600 border-0 rounded-full w-fit text-xs lg:text-sm"
                            onClick={handleGoBack}
                            >Go back to products</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default DetailsProduct;
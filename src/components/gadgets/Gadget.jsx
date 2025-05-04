

const Gadget = ({gadget}) => {

    const {product_id, product_image, price, rating, product_title, description} = gadget;

    return (
        <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm">
            <figure className="px-10 pt-8">
                <img
                src={product_image}
                alt="Shoes"
                className="rounded-xl h-56 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center flex-none">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <div className="flex gap-2">
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                </div>
                <div className="card-actions">
                <button className="py-2 rounded-2xl btn btn-neutral btn-outline 
                bg-purple-600 text-white border-purple-600 
                hover:bg-white hover:text-purple-600 hover:shadow-none ">View details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;
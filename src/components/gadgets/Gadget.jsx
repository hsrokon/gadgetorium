

const Gadget = ({gadget}) => {

    const {product_id, product_image, product_title, description} = gadget;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10 w-96 h-72">
                <img
                src={product_image}
                alt="Shoes"
                className="rounded-xl h-full w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                <button className="btn btn-primary">View details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;


const Hero = () => {
    return (
        // <div className="">
            <div className="hero bg-purple-600 pt-20 pb-44 rounded-b-2xl relative">
                <div className="hero-content text-center text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold">Welcome to Gadgetorium - Your Ultimate Gadget Destination!</h1>
                        <p className="py-6">
                        Explore the latest in technology, from cutting-edge smartphones to smart home gear. At Gadgetorium, innovation meets style - upgrade your tech today!
                        </p>
                        <button className="btn btn-primary bg-white border-0 rounded-4xl text-purple-600">Shop now</button>
                    </div>
                    <div className="absolute w-7/12 mx-auto 
                    left-1/2 transform -translate-x-1/2 -bottom-[18rem] h-[28rem] 
                    border-2 border-base-300 backdrop-blur-3xl p-4 rounded-2xl">
                        <img className="h-full w-full object-cover rounded-2xl" src="https://i.ibb.co.com/zH5zF67K/banner.jpg" alt="" />
                    </div>
                </div>
            </div>
        // </div>
        
    );
};

export default Hero;
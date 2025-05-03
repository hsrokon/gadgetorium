import Gadgets from '../gadgets/Gadgets';
import Hero from '../hero/Hero';

const Home = () => {


    return (
        <div className='min-h-screen'>
            <Hero></Hero>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;
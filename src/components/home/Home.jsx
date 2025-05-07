import { Helmet } from 'react-helmet-async';
import Gadgets from '../gadgets/Gadgets';
import Hero from '../hero/Hero';

const Home = () => {


    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Gadgetorium | Home</title>
            </Helmet>
            <Hero></Hero>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;
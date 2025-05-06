import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Layout = () => {

    

    return (
            <div className='min-h-screen flex flex-col items-center'>
                <div className='w-11/12'>
                    <Header></Header>
                </div>
                <main className='w-11/12 flex-grow'>
                    <Outlet></Outlet>
                </main>
                <Footer></Footer>
            </div>
    );
};

export default Layout;<h1>Layout</h1>
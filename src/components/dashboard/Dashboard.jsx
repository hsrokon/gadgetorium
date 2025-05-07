import { useState } from "react";
import Cart from "../cart/Cart";
import Wishlist from "../wishlist/Wishlist";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {

    const [dashboardRender, setDashboardRender] = useState('cart'); 
    
    return (
        <div>
            <Helmet>
                    <title>Gadgetorium | Dashboard</title>
            </Helmet>
            <div className="bg-purple-600 text-white text-center py-9 flex flex-col gap-6 ">
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <p className="text-xs md:text-sm w-11/12 md:w-9/12 lg:w-7/12 mx-auto">Your Dashboard gives you a quick look at your activity on Gadgetorium — from recent views and favorite gadgets to purchases and alerts. Stay organized and in control, all in one place.</p>
                <div className='flex gap-2 justify-center '>
                    <button 
                    onClick={()=>setDashboardRender('cart')}
                    className={`py-2 px-10 rounded-full btn btn-neutral btn-outline 
                    ${dashboardRender==='cart'? 'text-purple-600 bg-white border-white' : 'text-white border-white hover:bg-purple-600'}`}>
                    Cart</button>
                    <button 
                    onClick={()=>setDashboardRender('wishlist')}
                    className={`py-2 px-8 rounded-full btn btn-neutral btn-outline
                    ${dashboardRender==='wishlist'? 'text-purple-600 bg-white border-white' : 'text-white border-white hover:bg-purple-600'}`}>
                    Wishlist</button>
                </div>
            </div>
            <div>
                {
                    dashboardRender==='cart' ? <Cart></Cart> : <Wishlist></Wishlist>
                }
            </div>
        </div>
    );
};

export default Dashboard;
import { useEffect, useState } from "react";
import Gadget from "./Gadget";


const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);
    const [catGadgets, setCatGadgets] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data=> {
            setGadgets(data);
            setCatGadgets(data)})
    },[])

    const handleCategoryRender = category => {
        if (category==='All') {
            setCatGadgets(gadgets)
        } else {
            const filtered = gadgets.filter(gadget=> gadget.category===category);//every time we're filtering data from gadget without changing it 
            setCatGadgets(filtered)
        }
    }

    const handleSort = type => {
        if (type==='price') {
            const priceSorted = [...gadgets].sort((a, b) => a.price - b.price)
            setCatGadgets(priceSorted)
            
        } else if(type==='rating'){
            const ratingSorted = [...gadgets].sort((a, b) => a.rating - b.rating)
            setCatGadgets(ratingSorted)
        }
    }


    return (
        <div id="products" className="mt-36 lg:mt-96">
            <div className="flex w-full flex-col">
                <div className="divider text-xs md:text-xl lg:text-4xl font-semibold mt-6 mb-2 lg:my-14 
                  before:bg-purple-600 after:bg-purple-600 
                  before:h-[2px] after:h-[2px] before:flex-1 after:flex-1">Browse the Best in Modern Gadgets</div>
            </div>
            <div className="flex relative">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                        {/* Page content here */}
                        {
                            catGadgets.map(gadget=> <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                        }
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu rounded-2xl 
                        text-base-content min-h-full w-52 p-4 flex flex-col justify-center gap-6">
                        {/* Sidebar content here */}
                            <div className="dropdown dropdown-center">
                                <div tabIndex={0} role="button" 
                                className="py-2 rounded-2xl btn btn-neutral btn-outline w-full
                            bg-purple-600 text-white border-white lg:text-black lg:bg-base-100 hover:bg-purple-600 lg:border-purple-600">Sort</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <button onClick={()=> handleSort('price')} 
                                    className="my-1 hover:bg-slate-100 rounded-xl py-1">Sort by price</button>
                                    <button onClick={()=> handleSort('rating')} 
                                    className="my-1 hover:bg-slate-100 rounded-xl py-1">Sort by rating</button>
                                </ul>
                            </div>

                            <div className="flex w-full flex-col">
                                <div className="divider font-semibold 
                                before:bg-purple-600 after:bg-purple-600 
                                before:h-[2px] after:h-[2px] before:flex-1 after:flex-1 
                                text-white lg:text-black">Category</div>
                            </div>

                            {['All', 'Smartphones', 'Laptops', 'Tablets', 'Audio', 'Wearables', 'Drones', 'Accessories', 'VR']
                            .map(category => <button
                            className="py-2 rounded-2xl btn btn-neutral btn-outline 
                            bg-purple-600 text-white border-white lg:text-black hover:text-white lg:bg-base-100 hover:bg-purple-600 lg:border-purple-600"
                            onClick={()=> handleCategoryRender(`${category}`)}
                            >{category}</button>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Gadgets;
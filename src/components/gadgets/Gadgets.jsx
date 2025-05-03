import { useEffect, useState } from "react";
import Gadget from "./Gadget";


const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setGadgets(data))
    },[])


    return (
        <div className="mt-96">
            {/* <h2 className="text-4xl font-semibold text-center">Browse the Best in Modern Gadgets</h2> */}
            <div className="flex w-full flex-col">
                <div className="divider text-4xl font-semibold my-14 
                  before:bg-purple-600 after:bg-purple-600 
                  before:h-[2px] after:h-[2px] before:flex-1 after:flex-1">Browse the Best in Modern Gadgets</div>
            </div>
            <div className="flex relative">
                {/* <div className="flex flex-col sticky border">
                    <button>Smartphones</button>
                    <button>Laptops</button>
                    <button>Tablets</button>
                    <button>Audio</button>
                    <button>Wearables</button>
                    <button>Drones</button>
                    <button>Accessories</button>
                    <button>VR</button>
                </div> */}
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content grid grid-cols-3">
                        {/* Page content here */}
                        {
                            gadgets.map(gadget=> <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
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
                            <button className="py-2 rounded-2xl btn btn-neutral btn-outline hover:bg-purple-600 border-purple-600">Smartphones</button>
                            <button className="py-2 rounded-2xl btn btn-neutral btn-outline hover:bg-purple-600 border-purple-600">Laptops</button>
                            <button className="py-2 rounded-2xl btn btn-neutral btn-outline hover:bg-purple-600 border-purple-600">Tablets</button>
                            <button className="py-2 rounded-2xl btn btn-neutral btn-outline hover:bg-purple-600 border-purple-600">Audio</button>
                            <button className="py-2 rounded-2xl btn btn-neutral btn-outline hover:bg-purple-600 border-purple-600">Wearables</button>
                            <button className="py-2 rounded-2xl btn btn-neutral btn-outline hover:bg-purple-600 border-purple-600">Drones</button>
                            <button className="py-2 rounded-2xl btn btn-neutral btn-outline hover:bg-purple-600 border-purple-600">Accessories</button>
                            <button className="py-2 rounded-2xl btn btn-neutral btn-outline hover:bg-purple-600 border-purple-600">VR</button>
                        </ul>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        gadgets.map(gadget=> <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                    }
                </div> */}
            </div>
            
        </div>
    );
};

export default Gadgets;
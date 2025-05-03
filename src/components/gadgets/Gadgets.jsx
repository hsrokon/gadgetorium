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
            <h2 className="text-4xl font-semibold text-center">Browse the Best in Modern Gadgets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    gadgets.map(gadget=> <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;
import { useEffect, useState } from "react";


const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setGadgets(data))
    },[])


    return (
        <div className="mt-96 h-[30rem]">
            <h2 className="text-9xl">Gadgets: {gadgets.length}</h2>
            
        </div>
    );
};

export default Gadgets;
import { Bounce, toast } from 'react-toastify';

const getLocalStorage = ()=> {
    const localStorageItem = localStorage.getItem('gadget-cart');
    if (localStorageItem) {
        const localStorageItemPar = JSON.parse(localStorageItem);
        return localStorageItemPar;
    } else {
        return [];
    }
}

const setLocalStorage = id => {
    const fromLS = getLocalStorage();
    const check = fromLS.find(idLS => idLS===id)
    if (check) {
        return;
    } else {
        fromLS.push(id);
        const addLSStr = JSON.stringify(fromLS);
        localStorage.setItem('gadget-cart', addLSStr);
        toast.success('Added to cart!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
}

const removeFromLS = id => {
    const LSids = getLocalStorage();
    const newIds = LSids.filter(idx => idx!==id);
    const newIdsStr = JSON.stringify(newIds);
    localStorage.removeItem('gadget-cart');//only clears gadget cart 
    localStorage.setItem('gadget-cart', newIdsStr)
    toast.error('Product removed from cart', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}

export {getLocalStorage, setLocalStorage, removeFromLS};
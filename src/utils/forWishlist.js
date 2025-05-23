import { Bounce, toast } from 'react-toastify';

const getLocalStorageWL = ()=> {
    const localStorageItem = localStorage.getItem('gadget-wishlist');
    if (localStorageItem) {
        const localStorageItemPar = JSON.parse(localStorageItem);
        return localStorageItemPar;
    } else {
        return [];
    }
}

const setLocalStorageWL = id => {
    const fromLS = getLocalStorageWL();
    const check = fromLS.find(idLS => idLS===id)
    if (check) {
        return;
    } else {
        fromLS.push(id);
        const addLSStr = JSON.stringify(fromLS);
        localStorage.setItem('gadget-wishlist', addLSStr);
        toast.success('Added to wishlist', {
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

const removeFromLSWL = id => {
    const LSids = getLocalStorageWL();
    const newIds = LSids.filter(idx => idx!==id);
    const newIdsStr = JSON.stringify(newIds);
    localStorage.removeItem('gadget-wishlist')
    localStorage.setItem('gadget-wishlist', newIdsStr)
    toast.error('Product removed wishlist', {
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

export {getLocalStorageWL, setLocalStorageWL, removeFromLSWL};
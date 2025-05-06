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
    }
}

export {getLocalStorage, setLocalStorage};
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

const removeFromLS = id => {
    const LSids = getLocalStorage();
    const newIds = LSids.filter(idx => idx!==id);
    const newIdsStr = JSON.stringify(newIds);
    localStorage.clear();
    localStorage.setItem('gadget-cart', newIdsStr)
}

export {getLocalStorage, setLocalStorage, removeFromLS};
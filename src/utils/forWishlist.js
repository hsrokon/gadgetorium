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
    }
}

const removeFromLSWL = id => {
    const LSids = getLocalStorageWL();
    const newIds = LSids.filter(idx => idx!==id);
    const newIdsStr = JSON.stringify(newIds);
    localStorage.removeItem('gadget-wishlist')
    localStorage.setItem('gadget-wishlist', newIdsStr)
}

export {getLocalStorageWL, setLocalStorageWL, removeFromLSWL};
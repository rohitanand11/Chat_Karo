import {APP_NAME} from "../../utility/constants/constants";

const PREFIX = APP_NAME;

export const saveToLocalStorage = (pKey,pValue) => {
    const prefixedkey = `${PREFIX}_${pKey}`;
    console.log(prefixedkey);
    console.log(JSON.stringify(pValue));
    // localStorage.setItem(prefixedkey,JSON.stringify(pValue));
} 
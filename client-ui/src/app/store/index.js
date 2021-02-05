 import { useLocalObservable  } from 'mobx-react-lite';
import React ,{useContext} from 'react';

import appstore from './appstore';

const storecontext = React.createContext();

//provider for store.
export const StoreProvider = ({children}) => {

    const store = useLocalObservable (()=> ({
        appstore,
    }));

    // const store = {
    //     appstore,
    // }

    return (
        <storecontext.Provider value={store}>
            {children}
        </storecontext.Provider>
    )
}

//context for store
export const useGlobalStore = () => {
    return useContext(storecontext);
}



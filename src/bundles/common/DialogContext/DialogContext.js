import React, { useState } from 'react';

const DialogContext = React.createContext();

export function DialogProvider({ children }) {

    const [opened, setOpened] = useState(false);
    const [component, setComponent] = useState();

    function dialog(opened, component) {
        setOpened(opened);
        if (component !== undefined) {
            setComponent(component);
        }
    }

    return (
        <DialogContext.Provider value={{dialog, opened, component}}>
            { children }
        </DialogContext.Provider>
    )
}

export default DialogContext;

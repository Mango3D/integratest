/* @mango3d/integratest
 *
 * /src/core/contexts/data.tsx
 */

import type {ContextProps, GenericObject} from "../../types";
import React, {Context, createContext, ReactElement, FC} from "react";

export interface DataContextValue extends ContextProps {
    displayName: string;
    carousel: Array<string>;
    handleSubmitForm: (data: GenericObject) => void;
}

export const DataContext: Context<any> = createContext({
    displayName: "DataContext",
});

export const DataProvider = DataContext.Provider;

const DataContextWrapper = ({children}: GenericObject): ReactElement => {
    const carousel: Array<string> = [
        "/images/carousel-forest-1.jpg",
        "/images/carousel-forest-2.jpg",
        "/images/carousel-forest-3.jpg",
    ];
    const handleSubmitForm = (data: GenericObject): void =>
        console.log("handleSubmitForm:", data);

    return (
        <DataProvider
            value={{
                carousel,
                handleSubmitForm,
            }}
        >
            {children}
        </DataProvider>
    );
};

export default DataContextWrapper;

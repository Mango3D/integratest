/* @mango3d/integratest
 *
 * /src/containers/pages/home.tsx
 */

import type {ReactElement, FC} from "react";

import {useContext} from "react";
import {DataContext, DataContextValue} from "../../core/contexts/data";

const HomePageContainer: FC = (): ReactElement => {
    const {carousel, handleSubmitForm} =
        useContext<DataContextValue>(DataContext);

    const tmpStyles = {font: "normal 16px Roboto"};

    return <h1 style={tmpStyles}>{"mango3d/integratest"}</h1>;
};

export default HomePageContainer;

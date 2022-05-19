/* @mango3d/integratest
 *
 * /src/containers/pages/home.tsx
 */

import type {ReactElement, FC} from "react";

import {useContext} from "react";
import {DataContext, DataContextValue} from "../../core/contexts/data";
import "./normalize.css";
import "./style.css";

// Import components
import Header from "../../components/Header";
import Who from "../../components/Who";
import What from "../../components/What";
import How from "../../components/How";

const HomePageContainer: FC = (): ReactElement => {
    const {carousel, handleSubmitForm} =
        useContext<DataContextValue>(DataContext);

    const tmpStyles = {font: "normal 16px Roboto"};

    return (
        <>
            <div className="page">
                <div className="page-redline" />
                <header>
                    <Header />
                </header>
                <>
                    <Who />
                    <What />
                    <How />
                </>
            </div>
        </>
    );
};

export default HomePageContainer;

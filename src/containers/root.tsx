/* @mango3d/integratest
 *
 * /src/containers/root.tsx
 */

import HomepageContainer from "./pages/home";
import DataContextWrapper from "../core/contexts/data";

const RootContainer = () => {
    return (
        <DataContextWrapper>
            <HomepageContainer />
        </DataContextWrapper>
    );
};

export default RootContainer;

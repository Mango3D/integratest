/* @mango3d/integratest
 *
 * /src/containers/root.tsx
 */

import {ReactElement, FC} from "react";

import HomepageContainer from "./pages/home";
import DataContextWrapper from "../core/contexts/data";

const RootContainer: FC = (): ReactElement => (
    <DataContextWrapper>
        <HomepageContainer />
    </DataContextWrapper>
);

export default RootContainer;

/* @mango3d/integratest
 *
 * /src/entries/app.tsx
 */

import {render} from "react-dom";

import RootContainer from "../containers/root";

const $app: HTMLElement = document.querySelector("#app") as HTMLElement;

render(<RootContainer />, $app);

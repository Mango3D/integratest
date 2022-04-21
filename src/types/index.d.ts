/* @mango3d/integratest
 *
 * /src/types/index.d.ts
 */

export type GenericObject = Record<string | number | symbol, any>;
export type ObjectEntry = [string, any];

export interface ContextProps {
    displayName: string;
}

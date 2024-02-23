/**
 * Return the parent of the element with any of the given types.
 *
 * @param element
 * @param anyType
 *
 * @return
 */
export function getParent(element: Element, anyType: string | string[]): Element | null;

type Element = import('../../../model/Types').Element;
export { is, isAny } from "../../../util/ModelUtil";

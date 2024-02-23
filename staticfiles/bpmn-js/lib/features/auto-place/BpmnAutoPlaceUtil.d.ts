/**
 * Get the position for given new target relative to the source it will be
 * connected to.
 *
 * @param  source
 * @param  element
 *
 * @return
 */
export function getNewShapePosition(source: Shape, element: Shape): Point;

/**
 * Get the position for given new flow node. Try placing the flow node right of
 * the source.
 *
 * @param source
 * @param element
 *
 * @return
 */
export function getFlowNodePosition(source: Shape, element: Shape): Point;

/**
 * Get the position for given text annotation. Try placing the text annotation
 * top-right of the source.
 *
 * @param source
 * @param element
 *
 * @return
 */
export function getTextAnnotationPosition(source: Shape, element: Shape): Point;

/**
 * Get the position for given new data element. Try placing the data element
 * bottom-right of the source.
 *
 * @param source
 * @param element
 *
 * @return
 */
export function getDataElementPosition(source: Shape, element: Shape): Point;

type Shape = import('../../model/Types').Shape;
type Point = import('diagram-js/lib/util/Types').Point;
type DirectionTRBL = import('diagram-js/lib/util/Types').DirectionTRBL;

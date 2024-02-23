/**
 * A base modeler for BPMN 2.0 diagrams.
 *
 * See {@link Modeler} for a fully-featured modeler.
 *
 */
export default class BaseModeler extends BaseViewer {}

type BaseViewerOptions = import('./BaseViewer').BaseViewerOptions;
type ModdleElementsById = import('./BaseViewer').ModdleElementsById;
type ModdleElement = import('./model/Types').ModdleElement;
import BaseViewer from './BaseViewer';

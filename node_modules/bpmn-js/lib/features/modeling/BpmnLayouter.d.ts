export default class BpmnLayouter extends BaseLayouter {
    /**
     * Returns waypoints of laid out connection.
     *
     * @param connection
     * @param hints
     *
     * @return
     */
    layoutConnection(connection: Connection, hints?: BpmnLayoutConnectionHints): Point[];
}

type Point = import('diagram-js/lib/util/Types').Point;
type Connection = import('../../model/Types').Connection;
type Element = import('../../model/Types').Element;
type LayoutConnectionHints = import('diagram-js/lib/layout/BaseLayouter').LayoutConnectionHints;

export type BpmnLayoutConnectionHints = {
    source?: Element;
    target?: Element;
    waypoints?: Point[];
    connectionStart?: Point;
    connectionEnd?: Point;
} & LayoutConnectionHints;

import BaseLayouter from 'diagram-js/lib/layout/BaseLayouter';

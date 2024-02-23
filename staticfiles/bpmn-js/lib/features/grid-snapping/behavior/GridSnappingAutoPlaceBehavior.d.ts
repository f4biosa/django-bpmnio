export default class GridSnappingAutoPlaceBehavior {
    static $inject: string[];
    /**
     * @param eventBus
     * @param gridSnapping
     */
    constructor(eventBus: EventBus, gridSnapping: GridSnapping);
}

type EventBus = import('diagram-js/lib/core/EventBus').default;
type GridSnapping = import('diagram-js/lib/features/grid-snapping/GridSnapping').default;
type Axis = import('diagram-js/lib/util/Types').Axis;

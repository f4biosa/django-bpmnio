/**
 * BPMN specific delete lane behavior.
 *
 */
export default class UpdateFlowNodeRefsBehavior extends CommandInterceptor {
    /**
     * @param eventBus
     * @param modeling
     * @param translate
     */
    constructor(eventBus: EventBus, modeling: Modeling, translate: Translate);
}

type EventBus = import('diagram-js/lib/core/EventBus').default;
type Modeling = import('../Modeling').default;
export type Translate = typeof import("diagram-js/lib/i18n/translate/translate").default;
import CommandInterceptor from 'diagram-js/lib/command/CommandInterceptor';

/**
 * A context pad that displays element specific, contextual actions next
 * to a diagram element.
 *
 */
export default class ContextPad {
  static $inject: string[];

  /**
   * @param canvas
   * @param config
   * @param eventBus
   * @param overlays
   */
  constructor(canvas: Canvas, config: ContextPadConfig, eventBus: EventBus, overlays: Overlays);

  /**
   * Register a context pad provider with the given priority. See
   * {@link ContextPadProvider} for examples.
   *
   * @param priority
   * @param provider
   */
  registerProvider(priority: number, provider: ContextPadProvider): void;

  /**
   *
   * Register a context pad provider with the default priority. See
   * {@link ContextPadProvider} for examples.
   *
   * @param provider
   */
  registerProvider(provider: ContextPadProvider): void;

  /**
   * Get context pad entries for given elements.
   *
   * @param target
   *
   * @return list of entries
   */
  getEntries(target: ContextPadTarget): ContextPadEntries;

  /**
   * Trigger context pad via DOM event.
   *
   * The entry to trigger is determined by the target element.
   *
   * @param action
   * @param event
   * @param autoActivate
   */
  trigger(action: string, event: Event, autoActivate?: boolean): any;

  /**
   * Trigger action on context pad entry entry, e.g. click, mouseover or mouseout.
   *
   * @param entryId
   * @param action
   * @param event
   * @param autoActivate
   */
  triggerEntry(entryId: string, action: string, event: Event, autoActivate?: boolean): any;

  /**
   * Open the context pad for given elements.
   *
   * @param target
   * @param force - Force re-opening context pad.
   */
  open(target: ContextPadTarget, force?: boolean): void;

  /**
   * @param target
   *
   * @return
   */
  getPad(target: ContextPadTarget): Overlay;

  /**
   * Close the context pad
   */
  close(): void;

  /**
   * Check if pad is open.
   *
   * If target is provided, check if it is opened
   * for the given target (single or multiple elements).
   *
   * @param target
   * @return
   */
  isOpen(target?: ContextPadTarget): boolean;

  /**
   * Check if pad is open and not hidden.
   *
   * @return
   */
  isShown(): boolean;
}

type Element = import('../../model/Types').Element;
type Rect = import('../../util/Types').Rect;
type Canvas = import('../../core/Canvas').default;
type EventBus = import('../../core/EventBus').default;
type Overlays = import('../overlays/Overlays').default;
type Overlay = import('../overlays/Overlays').Overlay;
type ContextPadProvider = import('./ContextPadProvider').default;
type ContextPadEntries = import('./ContextPadProvider').ContextPadEntries;

export type ContextPadConfig = {
    scale?: {
        min?: number;
        max?: number;
    };
};

export type ContextPadTarget<ElementType extends import("../../model/Types").Element = import("../../model/Types").Element> = ElementType | ElementType[];

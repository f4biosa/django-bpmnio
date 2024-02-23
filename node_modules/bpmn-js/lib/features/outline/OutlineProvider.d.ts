/**
 * BPMN-specific outline provider.
 *
 * @implements {BaseOutlineProvider}
 *
 */
export default class OutlineProvider implements BaseOutlineProvider {
  static $inject: string[];

  /**
   * @param outline
   * @param styles
   */
  constructor(outline: Outline, styles: Styles);

  /**
   * Returns outline for a given element.
   *
   * @param element
   *
   * @return
   */
  getOutline(element: Element): Outline;

  /**
   * Updates the outline for a given element.
   * Returns true if the update for the given element was handled by this provider.
   *
   * @param element
   * @param outline
   * @returns
   */
  updateOutline(element: Element, outline: Outline): boolean;
}

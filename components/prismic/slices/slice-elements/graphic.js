import React from 'react';
import Browser from 'components/browser';
import Phone from 'components/phone';
import GraphicDisplay from './graphic-display';

export default function Graphic({primary}) {
  const componentClass = 'content-section-p';

  /**
   * graphic_style: browser
   * If the content section has a graphic uploaded, let's show it.
   */
  if (primary.graphic && primary.graphic.url) {
    /**
     * If the graphic style is set to browser, we will wrap it in a browser component.
     */
    if (primary.graphic_style === 'browser') {
      return (
        <div className={componentClass + '-graphic ' + componentClass + '-area'}>
          <Browser>
            <GraphicDisplay data={primary} />
          </Browser>
        </div>
      );
    }
    /**
     * If the graphic style is set to phone, we will wrap it in a phone component.
     */
    if (primary.graphic_style === 'phone') {
      return (
        <div className={componentClass + '-graphic ' + componentClass + '-area'}>
          <Phone>
            <GraphicDisplay data={primary} />
          </Phone>
        </div>
      );
    }
    /**
     * graphic_style: bleed
     * We display bleed images a little bit differently
     */
    if (primary.graphic_style === 'bleed') {
      return (
        <div
          className={
            componentClass +
            '-graphic ' +
            componentClass +
            '-graphic--style-bleed-parent ' +
            componentClass +
            '-area'
          }
        >
          <GraphicDisplay background={true} data={primary} />
        </div>
      );
    }

    return (
      <div className={componentClass + '-graphic ' + componentClass + '-area'}>
        <GraphicDisplay data={primary} />
      </div>
    );
  }
  return null;
}

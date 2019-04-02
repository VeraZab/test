import Browser from 'components/browser';
import Phone from 'components/phone';
import GraphicDisplay from './graphic-display';

export default function Graphic({primary}) {
  const componentClass = 'content-section-p';

  if (primary.graphic && primary.graphic.url) {

    if (primary.graphic_style === 'browser') {
      return (
        <div className={componentClass + '-graphic ' + componentClass + '-area'}>
          <Browser>
            <GraphicDisplay data={primary} />
          </Browser>
        </div>
      );
    }
    if (primary.graphic_style === 'phone') {
      return (
        <div className={componentClass + '-graphic ' + componentClass + '-area'}>
          <Phone>
            <GraphicDisplay data={primary} />
          </Phone>
        </div>
      );
    }
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

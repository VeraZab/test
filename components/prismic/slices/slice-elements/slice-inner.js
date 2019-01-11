import React from 'react';
import Pretitle from './pretitle';
import Title from './title';
import Subtitle from './subtitle';

export default function SliceInner({data: {primary}, children}) {
  const componentClass = 'content-section-p';

  return (
    <div className={componentClass + '-details ' + componentClass + '-area'}>
      {Boolean(primary.pretitle) && <Pretitle pretitle={primary.pretitle} />}
      {Boolean(primary.title && primary.title.length && primary.title[0].text !== '') && (
        <Title title={primary.title} />
      )}
      {Boolean(primary.subtitle && primary.subtitle.length && primary.subtitle[0].text !== '') && (
        <Subtitle subtitle={primary.subtitle} />
      )}
      {children}
    </div>
  );
}

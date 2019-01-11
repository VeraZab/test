import React from 'react';
import shortid from 'shortid';
import Button from 'components/prismic/button';
import {constructButtons} from 'lib/construct-buttons';

export default function Actions({primary}) {
  const buttons = constructButtons(primary);

  return buttons.length ? (
    <div className="content-section-p-actions">
      <div className="content-section-p-actions-wrapper buttons">
        {buttons.map(button => (
          <Button key={shortid.generate()} data={button} />
        ))}
      </div>
    </div>
  ) : null;
}

import React from 'react';

function NotFound(props) {
  return (
    <div className={'page' + ` page--404`}>
      <div className="not-found">
        <div className="not-found__wrapper">
          <div className="not-found__messaging">
            <h1>404: Page Not Found</h1>
            <p>
              Looks like there's nothing here! Sorry about that. Maybe if you head{' '}
              <a href="https://plot.ly/">home</a>, you'll find what you're looking for. Or feel free
              to check out our <a href="https://plot.ly/feed">feed</a>. If you think this is
              something we should know about, feel free to shoot us an email at support [ at ]
              plot.ly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

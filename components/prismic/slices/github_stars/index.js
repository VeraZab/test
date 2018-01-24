import React from 'react'
const gh = require('parse-github-url')
const shortid = require('shortid')
export default function GithubStarsSlice({ slice }) {
  const Stars = slice.items.map((item, i) => {
    const github_repo = gh(item.repository_url.url)
    const src =
      'https://ghbtns.com/github-btn.html?user=' +
      github_repo.owner +
      '&repo=' +
      github_repo.name +
      '&type=star&count=true&size=large'

    const Label = item.label ? (
      <div
        className="github_stars__item__label content-section-p-body"
        key={shortid.generate()}
      >
        <p className="">{item.label}</p>
      </div>
    ) : null
    return (
      <div className="github_stars__item" key={shortid.generate()}>
        {Label}
        <iframe
          src={src}
          frameBorder="0"
          scrolling="0"
          width="160px"
          height="30px"
        />
      </div>
    )
  })
  return (
    <div className="slice github_stars">
      <div className="github_stars__wrapper">{Stars}</div>
    </div>
  )
}
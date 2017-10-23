import React from 'react'
const gh = require('parse-github-url')

export default function GithubStarsSlice({ slice }) {
  const Stars = slice.items.map((item, i) => {
    const github_repo = gh(item.repository_url.url)
    const src =
      'https://ghbtns.com/github-btn.html?user=' +
      github_repo.owner +
      '&repo=' +
      github_repo.name +
      '&type=star&count=true&size=large'
    return (
      <iframe
        src={src}
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
      />
    )
  })
  return (
    <div className="slice github_stars">
      <div className="github_stars-wrapper">
        <div className="github_stars-item">{Stars}</div>
      </div>
    </div>
  )
}

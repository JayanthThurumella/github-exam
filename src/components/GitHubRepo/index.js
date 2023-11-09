import {Component} from 'react'
import StarredRepo from '../StarredRepo/index'

import './index.css'

class GitHubRepo extends Component {
  state = {mostStarredRepos: []}

  componentDidMount() {
    this.gettingMostStarredRepos()
  }

  gettingMostStarredRepos = async () => {
    const url =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'
    const options = {
      Autherazation: 'Bearer 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',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    this.setState({mostStarredRepos: data})
  }

  render() {
    const {mostStarredRepos} = this.state

    return (
      <div className="main-container">
        <h1 className="main-heading">Most Starred Respos</h1>
        <StarredRepo />
        <StarredRepo />
        <StarredRepo />
        <p>
          <span>note:</span>error occuried when retriving github data thats why
          i cannont attached any data to website
        </p>
      </div>
    )
  }
}

export default GitHubRepo

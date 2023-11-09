import './index.css'

const StarredRepo = props => {
  const {repo} = props

  return (
    <div className="repo-container">
      <div className="image-container">
        <img src="www.googleimage.com" alt="avatar" />
      </div>
      <div className="standard-data">
        <div className="info-container">
          <h1>Repository name</h1>
          <p>Repository descripation</p>
        </div>
        <div className="details">
          <p>stars</p>
          <p>isssues</p>
        </div>
      </div>
    </div>
  )
}

export default StarredRepo

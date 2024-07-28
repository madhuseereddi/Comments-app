import './index.css'

const CommentItem = props => {
  const {item, activeLike, delteitem} = props
  const {id, name, comment, isLiked, color} = item

  const likeClick = () => {
    activeLike(id)
  }
  const deleteIt = () => {
    delteitem(id)
  }

  return (
    <li>
      <div className="headcard">
        <p className={`para00 ${color}`}>{name[0]}</p>
        <div className="cardinner">
          <div className="dis">
            <p className="para11">{name}</p>
            <p className="para33">less than a minute ago</p>
          </div>
          <p className="para22">{comment}</p>
        </div>
      </div>
      <div className="likeDelete">
        <div className="like">
          <img
            src={
              isLiked
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
            }
            className="img2"
            alt="like"
          />
          <button
            type="button"
            className="btn1"
            data-testid="like"
            onClick={likeClick}
          >
            <p className={isLiked ? 'like1' : 'like2'}>Like</p>
          </button>
        </div>
        <button className="btn1" onClick={deleteIt} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr1" />
    </li>
  )
}

export default CommentItem

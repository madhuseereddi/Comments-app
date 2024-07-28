import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    colorrandomNumber: initialContainerBackgroundClassNames[0],
    commentsList: [],
  }

  getName = event => {
    this.setState({name: event.target.value})
  }

  getComment = event => {
    this.setState({comment: event.target.value})
  }

  randomNumberIt = () => {
    const k = Math.floor(Math.random() * 7)
    this.setState({
      colorrandomNumber: initialContainerBackgroundClassNames[k],
    })
  }

  addList = event => {
    event.preventDefault()
    this.randomNumberIt()

    const {name, comment, colorrandomNumber} = this.state
    console.log(colorrandomNumber)
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      color: colorrandomNumber,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  activeLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem =>
        eachItem.id === id
          ? {...eachItem, isLiked: !eachItem.isLiked}
          : eachItem,
      ),
    }))
  }

  delteitem = id => {
    const {commentsList} = this.state
    const filterdList = commentsList.filter(eachItem => eachItem.id !== id)
    this.setState({commentsList: filterdList})
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <form onSubmit={this.addList}>
        <div className="full-bg">
          <div className="inner1">
            <div className="inner2">
              <h1 className="head1">Comments</h1>
              <p className="para1">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="name1"
                value={name}
                onChange={this.getName}
              />
              <textarea
                className="textArea1"
                placeholder="Your Comment"
                cols="40"
                rows="10"
                value={comment}
                onChange={this.getComment}
              />
              <button type="submit" className="btn" onClick={this.addList}>
                Add Comment
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img1"
            />
          </div>
          <hr className="hr" />
          <div className="cmd">
            <p className="para2">{commentsList.length}</p>
            <p className="para3">Comments</p>
          </div>
          <ul>
            {commentsList.map(eachItem => (
              <CommentItem
                item={eachItem}
                activeLike={this.activeLike}
                delteitem={this.delteitem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </form>
    )
  }
}

export default Comments

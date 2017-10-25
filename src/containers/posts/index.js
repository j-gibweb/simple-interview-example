import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  getPosts
} from '../../modules/post'

class Posts extends Component {

  componentWillMount() {
    this.props.getPosts(this.props.match.params.userId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.getPosts(nextProps.match.params.userId)
    }
  }

  render() {
    const {props} = this
    return (
      <div>
        <h1>Posts</h1>

        {props.post.posts.map((post, i) => {
          return (
            <div key={i}>
              <h3>{post.title}</h3>
              userId: {post.userId} <br />
              {post.body}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPosts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

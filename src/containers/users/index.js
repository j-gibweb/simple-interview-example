import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Posts from '../posts'

import {
  getUsers,
} from '../../modules/user'

class Users extends Component {

  componentWillMount() {
    this.props.getUsers()
  }

  render() {
    let {props} = this

    return (
      <div>
        <h1>Users</h1>

        {props.user.users.map((user, i) => {
          return (
            <div key={i}>
              <a onClick={() => {this.props.select(user)}}>
                {user.id} {user.name}
              </a>
            </div>
          )
        })}

        <Route path="/users/:userId/posts" component={Posts} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers,
  select: (user) => push(`/users/${user.id}/posts`)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

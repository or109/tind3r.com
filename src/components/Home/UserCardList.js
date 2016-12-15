import React, { Component } from 'react';
import { observer } from 'mobx-react'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import UserStore from '../../stores/UserStore'
import UserCard from './UserCard'
import styles from './user-card-list.scss'

@observer
@CSSModules(styles)
export default class UserCardList extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.width = window.innerWidth
  }

  renderUser(user) {
    return (
      <UserCard key={user.id} user={user} simple />
    )
  }

  render() {
    const { userStore } = this.props
    return (
      <div styleName="list">
        {userStore.tail.map(u => this.renderUser(u))}
        {userStore.isCharging && <UserCard asLoader />}
      </div>
    );
  }
}
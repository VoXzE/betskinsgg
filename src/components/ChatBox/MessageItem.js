import React, { Component } from 'react'

class AdminTag extends Component {
  render() {
    return (
      <div className="AdminTag">
        Admin
      </div>
    )
  }
}

class ModTag extends Component {
  render() {
    return (
      <div className="ModTag">
        Mod
      </div>
    )
  }
}


class MessageItem extends Component {
  render() {
    return (
      <div className="ChatMessage">
        <div className="Avatar">
          <img src={this.props.data.avatar} alt="avatar" />
          <div className="Level">{this.props.data.level}</div>
        </div>
        <div className="ChatContent">
          <div className="ChatName">
            <div className="name">
            {this.props.data.name}
            {this.props.data.isAdmin ? <AdminTag /> : null}
            {this.props.data.isMod ? <ModTag /> : null}
            </div>
          </div>
          {/* <h1>{this.props.data.name} 
          {this.props.data.isAdmin ? <AdminTag /> : null}
          </h1> */}
          <p>{this.props.data.message}</p>
        </div>
        <div className="ChatTime">
          {this.props.data.time}
        </div>
      </div>
    )
  }
}

export default MessageItem;
import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: this.props.status
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)

  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode && <span onDoubleClick={this.activateEditMode} >{this.props.status || "-------"}</span>}
        {this.state.editMode && <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} onChange={this.onStatusChange} />}
      </div>

    )
  }
}


export default ProfileStatus;

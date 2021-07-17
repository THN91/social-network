import React from "react";

import s from './ProfileInfo.module.css'

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };


    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deActiveEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status)
    };

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeEditMode}>{this.props.status || '----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.deActiveEditMode}
                            onChange={this.onChangeStatus}
                            value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default Status;
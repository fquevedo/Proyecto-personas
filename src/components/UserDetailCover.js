import React,{ Component } from 'react'
import './index.css'

class UserDetailCover extends Component{
    constructor(){
        super();

        this.state = {
            cover : 'https://png.pngtree.com/svg/20161027/service_default_avatar_182956.png'
        }
    }
    render(){
        
        return (
            <div className="UserDetailCover">
                <img alt="avatar" className="UserDetailCover-img" src={ this.state.cover } />
                <p className="UserDetailCover-p">
                    { this.props.firstName + ' ' + this.props.lastName }
                </p>
            </div>
        );
    }
}

export default UserDetailCover;
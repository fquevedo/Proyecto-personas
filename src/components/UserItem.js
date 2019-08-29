import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

class UserItem extends Component {
    constructor(){
        super();

        this.state = {
            isRedirected: false
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        this.setState({isRedirected : true})
    }
    render(){
        const { name, last_name, id, facebook} = this.props;
        if(this.state.isRedirected){
            return (<Redirect to={"/detail/"+id} />);
        }
        return(
            <div className="card" onClick={ this.onClick }>
                <div className="card-content">
                    <div className="UserItem-leftBox">
                        <img className="UserItem-image" src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="profile"/>
                    </div>
                    <div className="UserItem-rightBox">
                        <h2 className="UserItem-name">{ name + " " + last_name}</h2>
                        <h3 className="UserItem-facebook">{ facebook }</h3>

                    </div>

                </div>
            </div>
        );
    }
}

UserItem.propTypes = {
    name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    facebook: PropTypes.string
}

export default UserItem;
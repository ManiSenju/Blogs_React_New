import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component{
    render(){
        const {user} = this.props;
        return <div className="header">{user ? user.name : null}</div>
    }
}

const mapStateToProps =(state,ownProps)=>{
    return {user:state.user.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader);
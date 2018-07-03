import React, { Component } from 'react'
import { connect } from 'react-redux'

class ContactDetail extends Component {
    render () {
        if ( ! this.props.contact ) {
            return <div>Click to see details.</div>
        }
        return <div>
            <h4>{ this.props.contact.name }</h4>
            <p>{ this.props.contact.phone }</p>
        </div>
    }
}

function mapStateToProps( state ) {
    return {
        contact: state.activeContact
    }
}

export default connect( mapStateToProps )( ContactDetail )
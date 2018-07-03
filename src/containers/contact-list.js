import React, { Component } from 'react'
import { connect } from 'react-redux'


import selectContact from '../actions/action_select_contact'

import { bindActionCreators } from 'redux'

class ContactList extends Component {

    renderList () {
        if ( this.props.contacts ) {
            return this.props.contacts.map( contact => {
                return (
                    <li 
                        key={ contact.phone }
                        onClick={ () => this.props.selectContact( contact ) }
                    >
                        { contact.name }
                    </li>
                )
            } )
        } else {
            return <div>No data found.</div>
        }
    }

    render () {
        return <ul>
            { this.renderList() }
        </ul>
    }

}

function mapStateToProps ( state ) {
    return{contacts: state.contacts}
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( { selectContact: selectContact }, dispatch )
}

export default connect( mapStateToProps, mapDispatchToProps )( ContactList )
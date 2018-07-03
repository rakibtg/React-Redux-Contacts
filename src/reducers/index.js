import { combineReducers } from 'redux'

import ContactReducer from './reducer_contacts'
import ActiveContactReducer from './reducer_active_contact'

const rootReducer = combineReducers( {
    contacts: ContactReducer,
    activeContact: ActiveContactReducer,
} )

export default rootReducer
import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainTicketList: ticketListReducer
});

// export const updateTime = (id, formattedWaitTime) => ({
//   type: c.UPDATE_TIME,
//   id: id,
//   formattedWaitTime: formattedWaitTime
// });

export default rootReducer;
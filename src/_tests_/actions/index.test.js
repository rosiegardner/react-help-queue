import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Help Queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: 'DELETE_TICKET',
      id: 1
    });
  });

  it('toggleForm should creat TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM' 
    });
  });

  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({
      names: 'Jo and Bench',
      location: '3E',
      issue: 'Redux not working!',
      timeOpen: 0,
      formattedWaitTime: 'less than a minute ago',
      id: 1
    })).toEqual({
      type: c.ADD_TICKET,
      names: 'Jo and Bench',
      location: '3E',
      issue: 'Redux not working!',
      timeOpen: 0,
      formattedWaitTime: 'less than a minute ago',
      id: 1
    });
  });

  it('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, 'less than a minute ago')).toEqual({
      type: 'UPDATE_TIME',
      id: 1,
      formattedWaitTime: 'less than a minute ago'
    });
  });
  
});
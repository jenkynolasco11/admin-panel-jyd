import {
  // GET_MESSAGES_PENDING,
  GET_MESSAGES_SUCCESS,
  // SEND_MESSAGE_PENDING,
  SEND_MESSAGE_SUCCESS,
  // REMOVE_MESSAGE_PENDING,
  REMOVE_MESSAGE_SUCCESS
} from '../actions/message'

const defaultState = [
  { uname : 'Carl', umessage : 'Enim ex Lorem commodo nulla anim est est et dolore enim in eiusmod dolore.!', id : '8a3cced1-ec6f-5ac0-baf4-67b2b668ed93', uphone : '555-554-5234', uemail : 'bi@he.hr', uinterest : 'Lamborghini' },
  { uname : 'Jim', umessage : 'Aliquip ullamco labore excepteur commodo magna fugiat nulla irure laborum id enim ad.!', id : 'cdfa16d6-0607-558f-814e-f1ee27fe3250', uphone : '555-554-5234', uemail : 'dobugo@gamurim.cl', uinterest : 'Lamborghini' },
  { uname : 'Cora', umessage : 'Eiusmod aliqua id sit nulla laborum do minim est qui sit quis ea consectetur.!', id : '390c658e-ebae-57a6-8279-3c34252c1b1d', uphone : '555-554-5234', uemail : 'ejpab@ru.fi', uinterest : 'Lamborghini' },
  { uname : 'Christine', umessage : 'Lorem dolore ut occaecat aliqua reprehenderit quis cupidatat laboris anim dolore aliquip.!', id : 'b687b822-4c2b-55fd-97f0-8615114be822', uphone : '555-554-5234', uemail : 'denew@keeli.sl', uinterest : 'Lamborghini' },
  { uname : 'Charles', umessage : 'Sunt adipisicing sit velit eiusmod.!', id : '3b866ab2-e4d0-5aa0-9add-c85a847a0069', uphone : '555-554-5234', uemail : 'fonesa@pu.lb', uinterest : 'Lamborghini' },
  { uname : 'Jessie', umessage : 'Minim aute id proident deserunt deserunt ea ullamco.!', id : 'a45222f2-9d36-5cce-a589-e94fe1d929a2', uphone : '555-554-5234', uemail : 'ke@sen.fm', uinterest : 'Lamborghini' },
  { uname : 'Lawrence', umessage : 'Dolor fugiat labore cillum labore id deserunt labore culpa duis sint ea nostrud irure.!', id : 'e4480887-e2d3-59b0-b302-4c7f65f570bb', uphone : '555-554-5234', uemail : 'rifuk@mucena.st', uinterest : 'Lamborghini' },
]

export default (state = defaultState, action) => {
  switch (action.type) {
    // case GET_MESSAGES_PENDING:
    //   return state
    case GET_MESSAGES_SUCCESS:
      return [...action.payload.data]
    // case SEND_MESSAGE_PENDING:
    //   return state
    case SEND_MESSAGE_SUCCESS:
      return [...action.payload.data]
    // case REMOVE_MESSAGE_PENDING:
    //   return state
    case REMOVE_MESSAGE_SUCCESS:
      return [].concat(state.filter(msg => msg.id !== action.payload ))
    default:
      return state
  }
}

import { createAction } from 'redux-actions';

import ui from './actions/ui';
/** inject:action-import */

/**
 * Application actions, that can mutate app state.
 * Action is just a plain object with type and [optional] payload.
 *
 * @example
 * const myAction = {
 * .."type": 'INITIALIZE_APP',
 * .."payload": {
 * ....."initialized": true
 * ..}
 * }
 *
 * When object of this action is emitted, it can be handled by reducer by actions type.
 * Such reducer can mutate the state of an app according to action type or payload if needed.
 *
 */
const actions = {
    ui: ui
        /** inject:action */
};

export default actions;
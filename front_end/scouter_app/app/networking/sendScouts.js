import sendOneScout from './send_things';
import store from '../my_redux/store'
import { removeQueue } from '../my_redux/sendQueueActions';

export default async function sendScouts() {
    while (store.getState().scoutSendingQueue.length > 0) {
        res = await sendOneScout(store.getState().scoutSendingQueue[0]);
        if (res.successful) {
            store.dispatch(removeQueue())
        }
        else {
            // needs improvement
            console.log(res.msg)
        }
    }
}
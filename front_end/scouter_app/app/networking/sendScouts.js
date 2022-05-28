import sendOneScout from './send_things';
import store from '../my_redux/store'
import { removeQueue } from '../my_redux/sendQueueActions';

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default async function sendScouts() {
    while (store.getState().scoutSendingQueue.length > 0) {
        const scout = store.getState().scoutSendingQueue[0]
        res = await sendOneScout(scout);
        if (res.successful) {
            store.dispatch(removeQueue())
        }
        else {
            let s = 1000;
            await delay((s * 10))
        }
    }
}
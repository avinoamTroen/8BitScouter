import sendOneScout from './send_things';
import store from '../my_redux/store'
import { removeQueue } from '../my_redux/sendQueueActions';

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default async function sendScouts() {
    console.log('starting sendSCoputs - send scouts')
    console.log(store.getState().scoutSendingQueue.length)

    while (store.getState().scoutSendingQueue.length > 0) {
        console.log('starting send')
        const scout = store.getState().scoutSendingQueue[0]
        res = await sendOneScout(scout);
        if (res.successful) {
            store.dispatch(removeQueue())
            console.log('success')
        }
        else {
            // needs improvement
            let s = 1000;
            await delay((s * 10))
            console.log(res.msg)
        }
    }
}
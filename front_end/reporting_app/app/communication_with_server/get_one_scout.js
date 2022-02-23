export default function get_single_scout(compName, roundNumberStr, teamNumberStr) {
    const paramsObj = { compName, roundNumberStr, teamNumberStr };
    console.log(paramsObj)
    const searchParams = new URLSearchParams(paramsObj);
    const url = 'http://192.168.68.63:5000/output_server/one_scout/json' + '?' + searchParams.toString()
    console.log(url)
    const res = () => fetch(url, {
        method: 'GET',
    })
        .then(response => { console.log('response.json'); console.log(response.json); return { canUse: response.ok, payload: response.json } })
        .catch(response => { return { canUse: false, payload: response.json } })
    console.log('res')
    console.log(res)

    return res
}
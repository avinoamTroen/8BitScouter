// //Obj of data to send in future like a dummyDb
// const data = { username: 'example' };

// //POST request with body equal on data in JSON format
// fetch('https://example.com/profile', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then((response) => response.json())
// //Then with the data from the response in JSON...
// .then((data) => {
//   console.log('Success:', data);
// })
// //Then with the error genereted...
// .catch((error) => {
//   console.error('Error:', error);
// });

// //	
export default (things) => {
    fetch('http://192.168.1.110:5000/input_server/one_scout/json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(things)
    })
        .then(response => response.ok)
        .then(data => console.log(data));
}
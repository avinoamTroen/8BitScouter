import TcpSocket from 'react-native-tcp-socket';

// Create socket
const options = {
    host: "127.0.0.1",
    port: 3173,
}

const client = TcpSocket.createConnection(options, () => {
    console.log("test")
    // Write on the socket
    client.write('Hello server!');

    // Close socket
    client.destroy();
});

client.on('data', function (data) {
    console.log('message was received', data);
});

client.on('error', function (error) {
    console.log(error);
});

client.on('close', function () {
    console.log('Connection closed!');
});

# Avinoam Troen
import socket
from utils import *


def main():
    """
    main function - runs the server in charge of receiving data and storing it
    """

    ''' Initialize the socket '''
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # init new socket and its protocol
    server_socket.bind((IPADDR, PORT))  # bind the socket with the address
    server_socket.listen()  # listen to messages from clients

    ''' Accept connection from client '''
    (client_socket, client_address) = server_socket.accept()  # accept connection from a client

    data = client_socket.recv(MAX_MSG_SIZE).decode()
    print(data)


if __name__ == '__main__':
    main()

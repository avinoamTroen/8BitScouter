# Avinoam Troen
import socket
from utils import *
from my_proto_pb2 import *


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

    ''' Get data and decode data '''
    fake_game = game()
    #fake_game.ParseFromString(client_socket.recv(MAX_MSG_SIZE))
    print(client_socket.recv(MAX_MSG_SIZE).decode())
    fake_game_1 = OneScout.from_proto(fake_game)

    ''' Do things with the data '''
    print(fake_game)
    print(fake_game_1.round)


if __name__ == '__main__':
    main()

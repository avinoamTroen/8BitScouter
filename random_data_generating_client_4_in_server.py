''' Phase 1) Import relevant modules '''
import socket  # import socket module to enable working over sockets
from utils import IPADDR, PORT, MAX_MSG_SIZE  # shared consts for connection details
from my_proto_pb2 import game

"""

??????????????????????? Thing to use later ??????????????????????

# make garbage data
    NUMBER_OF_FAKE_SCOUTS = 10
    arr = []
    for i in range(NUMBER_OF_FAKE_SCOUTS):
        s = OneScout(random.randint(1, 9999), "comp1", ("prelims: " + str(random.randint(1, 13))), random.choice(["RED", "BLUE"]), random.randint(1,5), random.randint(2,15), random.randint(1, 7), random.choice([True, False]), f"text - {i}")
        arr.append(s)

    # send garbage data
    for i in range(NUMBER_OF_FAKE_SCOUTS):
        ''' Initialize the socket '''
        my_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # init new socket and its protocol
        my_socket.connect((IPADDR, PORT))  # connect to the server via address and port

        '''Work with the socket... send and receive messages'''
        thing = ""
        my_socket.send(thing.encode())
        # response = my_socket.recv(MAX_MSG_SIZE).decode()
        # added line
        ''' Close the socket at the end '''
        my_socket.close()
"""

def main():
    """
    acts like a client - so we can test the in_server
    """
    ''' Initialize the socket '''
    my_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # init new socket and its protocol
    my_socket.connect((IPADDR, PORT))  # connect to the server via address and port

    ''' Work with the socket... send and receive messages - main game loop here '''
    
    thing = "thing".encode()
    my_socket.send(thing)
    # print server response
    response = my_socket.recv(MAX_MSG_SIZE).decode()

    ''' Close the socket at the end '''
    my_socket.close()


if __name__ == '__main__':
    main()

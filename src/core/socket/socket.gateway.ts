import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { FileLoggerService } from '../file-logger/file-logger.service';
import { from, map, Observable } from 'rxjs';

@WebSocketGateway({
  path:'/socket.io'
}) // You can specify a port and namespace here, e.g., @WebSocketGateway(3001)
export class SocketGateway {
  @WebSocketServer() server: Server; // Injects the Socket.IO server instance

  constructor(
    private readonly logService: FileLoggerService,
  ){}

  // Handles new client connections
  afterInit(server: Server) {
    this.logService.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    this.logService.log(`Client connected: ${client.id}`);
    client.emit('message', 'Welcome to the WebSocket server!');
  }

  handleDisconnect(client: Socket) {
    this.logService.log(`Client disconnected: ${client.id}`);
  }

  // Handles messages from clients
  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() data: string, @ConnectedSocket() client: Socket): string {
    this.logService.log(`Message from ${client.id}: ${data}`);
    this.server.emit('message', `Broadcast: ${data} (${client.id})`); // Emits to all connected clients
    return 'Message received!'; // Acknowledgment to the sender
  }


  @SubscribeMessage('sample-events')
  onEvent(@MessageBody() data: string): Observable<WsResponse<string>> {
    const event = 'message';
    const getRandomInt = function(min:number, max:number){
      min = Math.ceil(min); // Ensure min is an integer
      max = Math.floor(max); // Ensure max is an integer
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const sampleData =  Array.from({length: getRandomInt(5,27) } , (val,k) => (`${data} ${k+1}`) )
    sampleData.push(`===============================================`)
    // const response = [1, 2, 3];

    return from(sampleData).pipe(
      map(data => ({ event, data })),
    );
  }

}

import {Connection} from "packet-system";

export default abstract class ServerConnection extends Connection {
    public static readonly SERVER_ID = "SERVER_ID"

    id(): string {
        return ServerConnection.SERVER_ID;
    }
}
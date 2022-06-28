import {Connection} from "packet-system";
import ClientPacketAdapter from "./ClientPacketAdapter";
import CommonPacketHandler from "../common/CommonPacketHandler";

export default abstract class ClientPacketHandler extends CommonPacketHandler<ClientPacketAdapter> {
    private _serverConnection: Connection | null = null

    protected constructor(options = {}) {
        super(options);
    }

    connect() {
        const clientAdapter = this.packetAdapter();
        if (clientAdapter == undefined) {
            throw new Error("ClientPacketAdapter must be initialized!")
        }

        const connection = clientAdapter.connect()
        if (connection == null) {
            return
        }

        this._serverConnection = connection
    }

    /**
     * @return the server connection if applicable.
     */
    serverConnection(): Connection | null {
        return this._serverConnection
    }
}
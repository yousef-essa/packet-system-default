import ServerPacketAdapter from "./ServerPacketAdapter";
import CommonPacketHandler from "../common/CommonPacketHandler";

export default abstract class ServerPacketHandler extends CommonPacketHandler<ServerPacketAdapter> {
    private static readonly DEFAULT_OPTIONS = {
        isServer: true
    }

    protected constructor(options = {}) {
        // override the isServer to true
        options = {...options, ...ServerPacketHandler.DEFAULT_OPTIONS}
        super(options);
    }

    connect() {
        const serverAdapter = this.packetAdapter();
        if (serverAdapter == undefined) {
            throw new Error("ServerPacketAdapter must be initialized!")
        }

        serverAdapter.connect()
    }
}
import CommonPacketAdapter from "./CommonPacketAdapter";
import {PacketHandler} from "packet-system";

export default abstract class CommonPacketHandler<T extends CommonPacketAdapter<any>> extends PacketHandler {
    private readonly _packetAdapter: T

    protected constructor(options = {}) {
        super(options);
        this._packetAdapter = this.packetAdapter()

        // a hacky way to override the adapter method
        // to return a single instance of this packet
        // adapter
        this.packetAdapter = () => {
            return this._packetAdapter
        }
    }

    /**
     * Initializes the connection by invoking the
     * {@link CommonPacketAdapter#connect} method - if applicable.
     */
    abstract connect(): void

    /**
     * @return the respective packet adapter.
     */
    abstract packetAdapter(): T
}
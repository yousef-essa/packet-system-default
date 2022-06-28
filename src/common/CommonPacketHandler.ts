import CommonPacketAdapter from "./CommonPacketAdapter";
import {PacketHandler} from "packet-system";

export default abstract class CommonPacketHandler<T extends CommonPacketAdapter<any>> extends PacketHandler {
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
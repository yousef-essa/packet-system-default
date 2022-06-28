import {Connection, PacketHandler} from "packet-system";

export default abstract class CommonPacketAdapter<H extends PacketHandler> {
    protected readonly packetHandler: H

    protected constructor(packetHandler: H) {
        this.packetHandler = packetHandler;
    }

    abstract connect(): Connection | null
}
import {Connection, PacketUtil} from "packet-system";
import CommonPacketAdapter from "../common/CommonPacketAdapter";
import ServerPacketHandler from "./ServerPacketHandler";

export default abstract class ServerPacketAdapter extends CommonPacketAdapter<ServerPacketHandler> {
    onReceive(sender: Connection, data: string) {
        const packetType = PacketUtil.packetType(data);
        const cleanContent = PacketUtil.removePacketType(packetType, data)
        this.packetHandler.onReceive(packetType, sender, cleanContent)
    }
}
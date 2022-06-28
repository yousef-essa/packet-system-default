import { PacketUtil } from "packet-system";
import CommonPacketAdapter from "../common/CommonPacketAdapter";
import ClientPacketHandler from "./ClientPacketHandler";

export default abstract class ClientPacketAdapter extends CommonPacketAdapter<ClientPacketHandler> {
    onReceive(data: string) {
        const sender = this.packetHandler.serverConnection();
        if (sender == undefined) {
            return
        }

        const packetType = PacketUtil.packetType(data);
        const cleanContent = PacketUtil.removePacketType(packetType, data)

        this.packetHandler.onReceive(packetType, sender, cleanContent)
    }
}
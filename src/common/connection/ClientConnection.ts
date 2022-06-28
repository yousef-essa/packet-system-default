import {Connection} from "packet-system";
import PacketUtil from "../PacketUtil";

export default abstract class ClientConnection extends Connection {
    private readonly _id: string

    constructor(id: string = PacketUtil.generateId()) {
        super();
        this._id = id;
    }

    id(): string {
        return this._id
    }
}
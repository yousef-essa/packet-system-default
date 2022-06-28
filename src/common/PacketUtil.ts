export default class PacketUtil {
    private static PACKET_NAME_REGEX: RegExp = /(?<=\[).+?(?=\])/

    public static generateId(): string {
        // desired length of id
        const idStrLen = 16;

        // always start with a letter -- base 36 makes for a nice shortcut
        let idStr = (Math.floor((Math.random() * 25)) + 10).toString(36) + ";";
        // add a timestamp in milliseconds (base 36 again) as the base
        idStr += (new Date()).getTime().toString(36) + ";";
        // similar to above, complete the id using random, alphanumeric characters
        do {
            idStr += (Math.floor((Math.random() * 35))).toString(36);
        } while (idStr.length < idStrLen);

        return idStr;
    }
}
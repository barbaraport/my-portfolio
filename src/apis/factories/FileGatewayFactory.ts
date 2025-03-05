import { FileGateway } from "../gateways/FileGateway";
import type { Gateway } from "../gateways/gateway";

export class FileGatewayFactory { 
    static create(): Gateway {
        return new FileGateway();
    }
}
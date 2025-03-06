import type { Gateway } from "../gateways/gateway";

export class DataService {
    private readonly gateway: Gateway;

    constructor(gateway: Gateway) { 
        this.gateway = gateway;
    }

    async get() {
        return await this.gateway.fetch();
    }
}
import type { PortfolioData } from "../dtos/PortfolioDataDTO";
import { Gateway } from "./gateway";
import data from "../data/data.json";

export class FileGateway extends Gateway {
    fetch(): Promise<PortfolioData> {
        return Promise.resolve(data);
    }
}
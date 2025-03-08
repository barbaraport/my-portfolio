import type { PortfolioData } from '../dtos/PortfolioDataDTO';

export abstract class Gateway {
	abstract fetch(): Promise<PortfolioData>;
}

import type { PortfolioData } from '../daos/PortfolioData';

export abstract class Gateway {
	abstract fetch(): Promise<PortfolioData>;
}

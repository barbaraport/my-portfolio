import { parseDateFromString } from '$lib/helpers/parseDateFromString/parseDateFromString';
import type { PortfolioData } from '../dtos/PortfolioData';
import type { Gateway } from '../gateways/gateway';

export class DataService {
	private readonly gateway: Gateway;

	constructor(gateway: Gateway) {
		this.gateway = gateway;
	}

	async get(): Promise<PortfolioData> {
		const { info, projects } = await this.gateway.fetch();

		const formattedData: PortfolioData = {
			info: {
				...info,
				education: info.education.map((item) => ({
					...item,
					startDate: parseDateFromString(item.startDate),
					endDate: item.endDate ? parseDateFromString(item.endDate) : undefined
				}))
			},
			projects
		};

		return formattedData;
	}
}

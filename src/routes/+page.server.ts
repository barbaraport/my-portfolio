import type { PortfolioData } from '../apis/dtos/PortfolioData';
import { FileGateway } from '../apis/gateways/FileGateway';
import { DataService } from '../apis/services/DataService';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<PortfolioData> => {
	const service = new DataService(new FileGateway());

	return service
		.get()
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error('Failed to load portfolio data: ' + error.message);

			return {
				info: {
					
				},
				projects: [],
				skills: [],
				experiences: []
			} as PortfolioData;
		});
};

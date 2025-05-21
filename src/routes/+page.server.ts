import type { PortfolioData } from '@api/dtos/PortfolioData';
import { FileGateway } from '@api/gateways/FileGateway';
import { DataService } from '@api/services/DataService';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<PortfolioData> => {
	const service = new DataService(new FileGateway());

	return service
		.get()
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error(error);
			return {} as PortfolioData;
		});
};

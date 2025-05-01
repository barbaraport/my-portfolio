import type { PortfolioData } from '../apis/daos/PortfolioData';
import { FileGateway } from '../apis/gateways/FileGateway';
import { DataService } from '../apis/services/DataService';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
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

<script lang="ts">
	import { getYearFromDate } from '$lib/helpers/getYearFromDate/getYearFromDate';
	import type { ExperienceProps } from './ExperienceProps';

	const { experience }: ExperienceProps = $props();

	const { name, place, description, startDate, endDate } = experience;
</script>

<div>
	<div class="flex justify-between">
		<div>
			<div class="w-full"><span>{name}</span></div>
			<div class="w-full"><span class="text-sm">{place}</span></div>
		</div>

		<div class="flex justify-end whitespace-nowrap">
			<span>({getYearFromDate(startDate)} - {getYearFromDate(endDate)})</span>
		</div>
	</div>
	<ul role="list" class="marker:--color-text ml-6 list-disc">
		{#each description as paragraph}
			<li>{paragraph}</li>
		{/each}
	</ul>
</div>

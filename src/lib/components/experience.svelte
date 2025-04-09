<script lang="ts">
	import type { ExperienceProps } from './dtos/ExperienceProps';

	const { experience }: ExperienceProps = $props();

	function getYearFromDate(date?: Date | string): number {
		if (!date) return new Date().getFullYear();

		return new Date(date).getFullYear();
	}
</script>

<div>
	<div class="flex justify-between">
		<div>
			<div class="w-full"><span>{experience.name}</span></div>
			<div class="w-full"><span class="text-sm">{experience.place}</span></div>
		</div>

		<div class="nowrap flex justify-end whitespace-nowrap">
			<span>({getYearFromDate(experience.startDate)} - {getYearFromDate(experience.endDate)})</span>
		</div>
	</div>
	<ul role="list" class="marker:--color-text ml-6 list-disc">
		{#each experience.description as paragraph}
			<li>{paragraph}</li>
		{/each}
	</ul>
</div>

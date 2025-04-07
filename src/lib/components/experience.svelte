<script lang="ts">
	import type { ExperienceProps } from './dtos/ExperienceProps';

	const { experience }: ExperienceProps = $props();
</script>

<div>
	<div class="flex justify-between">
		<div class="w-full"><span>{experience.name}</span></div>
		<div class="nowrap flex justify-end whitespace-nowrap">
			<span
				>({new Date(experience.startDate).getFullYear()} - {new Date(
					experience.endDate
				).getFullYear()})</span
			>
		</div>
	</div>
	<ul role="list" class="marker:--color-text ml-6 list-disc">
		{#each experience.description as paragraph}
			<li>{paragraph}</li>
		{/each}
	</ul>
</div>

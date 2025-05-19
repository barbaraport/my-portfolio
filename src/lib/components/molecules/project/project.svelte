<script lang="ts">
	import Skill from '$lib/components/atoms/skill/skill.svelte';
	import type { ProjectProps } from './ProjectProps';
	const { name, description, image, skills }: ProjectProps = $props();
</script>

<div
	class="md::flex-col flex w-full rounded-lg border max-[644px]:flex-col sm:flex-col md:flex-col lg:flex-row"
>
	<div class="flex aspect-video items-center justify-center rounded-lg bg-black lg:w-1/2">
		<img src={image?.url} alt={image?.alt} class="max-h-96" />
	</div>
	<div class="flex w-full flex-col justify-between gap-3 p-6 lg:w-1/2">
		<div>
			<span class="text-xl font-bold">{name}</span>
			<ul role="list" class="marker:--color-text ml-6 list-disc">
				<li>{description}</li>
			</ul>
		</div>
		<div class="mt-6 flex flex-wrap gap-3">
			{#each skills as skill}
				<Skill name={skill?.name} />
			{/each}
		</div>
	</div>
</div>

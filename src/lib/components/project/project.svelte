<script lang="ts">
	import type { ProjectProps } from './ProjectProps';
	import Skill from '../skill/skill.svelte';
	const { name, description, image, skills }: ProjectProps = $props();
</script>

<div
	class="md::flex-col flex w-full rounded-lg border max-[644px]:flex-col sm:flex-col md:flex-col lg:flex-row"
>
	<div class="w-full lg:w-1/2">
		<img src={image?.url} alt={image?.alt} class="w-full rounded-tl-lg rounded-bl-lg" />
	</div>
	<div class="m-6 flex w-full flex-col justify-between gap-2 lg:w-1/2">
		<div>
			<span class="text-xl font-bold">{name}</span>
			<ul role="list" class="marker:--color-text ml-6 list-disc">
				<li>{description}</li>
			</ul>
		</div>
		<div class="flex flex-wrap gap-3">
			{#each skills as skill}
				<Skill name={skill?.name} />
			{/each}
		</div>
	</div>
</div>

<script lang="ts">
	import type { ProjectsProps } from '$lib/sections/projects/ProjectsProps';
	import Project from '$lib/components/project/project.svelte';
	import { Sections } from '$lib/constants/sections';
	import SectionTitle from '$lib/components/sectionTitle/sectionTitle.svelte';
	const { projects }: ProjectsProps = $props();
</script>

<div id={Sections.PROJECTS} class="min-h-dvh px-4">
	<div class="flex flex-col items-center justify-center gap-3 py-3">
		<SectionTitle text="Projects" />
		<div class="items-center justify-center text-center text-2xl max-[644px]:text-lg">
			<span>Quality</span>
			<span class="font-light">in code, </span>
			<span>excellence </span>
			<span class="font-light">in delivery.</span>
		</div>
	</div>
	<div class="flex flex-col items-center gap-3">
		{#each projects as project}
			<Project
				name={project?.name}
				description={project?.description}
				image={project?.image}
				skills={project?.skills}
			/>
		{/each}
	</div>
</div>

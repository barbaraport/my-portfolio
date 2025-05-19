<script lang="ts">
	import SectionSubtitle from '$lib/components/atoms/sectionSubtitle/sectionSubtitle.svelte';
	import SectionTitle from '$lib/components/atoms/sectionTitle/sectionTitle.svelte';
	import Project from '$lib/components/molecules/project/project.svelte';
	import { Sections } from '$lib/constants/sections';
	import type { ProjectsProps } from './ProjectsProps';

	const { projects }: ProjectsProps = $props();
</script>

<div id={Sections.PROJECTS} class="min-h-dvh px-4">
	<div class="flex flex-col items-center justify-center gap-3 py-3">
		<SectionTitle text="Projects" />
		<SectionSubtitle>
			<span>Quality</span>
			<span class="font-light">in code, </span>
			<span>excellence </span>
			<span class="font-light">in delivery.</span>
		</SectionSubtitle>
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

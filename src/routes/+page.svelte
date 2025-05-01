<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import AboutMe from '$lib/sections/about-me/aboutMe.svelte';
	import MainSection from '$lib/sections/main/mainSection.svelte';
	import Projects from '$lib/sections/projects/projects.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { info, projects } = data;
</script>

<MainSection {info} />

<Projects {projects} />

<AboutMe {info} />

<Footer {info} />

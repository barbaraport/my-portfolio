<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import Navbar from '$lib/components/navBar/navbar.svelte';
	import AboutMe from '$lib/sections/about-me/aboutMe.svelte';
	import MainSection from '$lib/sections/main/mainSection.svelte';
	import Projects from '$lib/sections/projects/projects.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { info, projects } = data;
</script>

<Navbar {info} {projects} />

<MainSection {info} />

{#if projects?.length > 0}
	<Projects {projects} />
{/if}

<AboutMe {info} />

<Footer {info} />

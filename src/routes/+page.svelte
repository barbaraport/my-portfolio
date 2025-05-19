<script lang="ts">
	import Footer from '$lib/components/organisms/footer/footer.svelte';
	import Navbar from '$lib/components/organisms/navBar/navbar.svelte';
	import AboutMe from '$lib/components/templates/about-me/aboutMe.svelte';
	import MainSection from '$lib/components/templates/main/mainSection.svelte';
	import Projects from '$lib/components/templates/projects/projects.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { info, projects } = data;
</script>

<Navbar {info} {projects} />

<MainSection />

{#if projects?.length > 0}
	<Projects {projects} />
{/if}

<AboutMe {info} />

<Footer {info} />

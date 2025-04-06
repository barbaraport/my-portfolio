<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import AboutMe from '$lib/sections/aboutMe/aboutMe.svelte';
	import MainSection from '$lib/sections/main/mainSection.svelte';
	import Projects from '$lib/sections/projects/projects.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<MainSection name={data.info.name} />

<Projects projects={data.projects} />

<AboutMe info={data.info} />

<Footer info={data.info} />

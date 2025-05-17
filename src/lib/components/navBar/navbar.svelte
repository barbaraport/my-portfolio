<script lang="ts">
	import { NavBarHeight } from '$lib/constants/components';
	import { Sections } from '$lib/constants/sections';
	import type { NavBarProps } from './NavBarProps';
	const { info, projects }: NavBarProps = $props();
	const { name, social } = info;
</script>

<div style={`height: ${NavBarHeight}px;`} class="flex place-content-between p-6">
	<div>
		<a href={social.linkedin}><span>{name}</span></a>
	</div>
	<div class="flex gap-7">
		{#if projects?.length > 0}
			<a href={`#${Sections.PROJECTS}`}>Projects</a>
		{/if}
		<a href={`#${Sections.ABOUT_ME}`}>About me</a>
	</div>
</div>

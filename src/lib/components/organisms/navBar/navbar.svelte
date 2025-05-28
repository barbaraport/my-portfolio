<script lang="ts">
	import { NavBarHeight } from '$lib/constants/components';
	import { Sections } from '$lib/constants/sections';
	import type { NavBarProps } from './NavBarProps';
	const { info, projects }: NavBarProps = $props();
	const { name, social } = info;
	const testId = 'navbar';
</script>

<div
	style={`height: ${NavBarHeight}`}
	class="flex place-content-between p-6"
	data-testid={`${testId}`}
>
	<div>
		<a href={social.linkedin} data-testid={`${testId}-my-name`}><span>{name}</span></a>
	</div>
	<div class="flex gap-7">
		{#if projects?.length > 0}
			<a href={`#${Sections.PROJECTS}`}>Projects</a>
		{/if}
		<a href={`#${Sections.ABOUT_ME}`} data-testid={`${testId}-about-me`}>About me</a>
	</div>
</div>

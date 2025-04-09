<script lang="ts">
	import { Sections } from '$lib/constants/sections';
	import type { NavBarProps } from './NavBarProps';
	const { personName }: NavBarProps = $props();
</script>

<div class="h-16">
	<div class="flex place-content-between p-6">
		<div>
			<span>{personName}</span>
		</div>
		<div class="flex gap-7">
			<a href={`#${Sections.PROJECTS}`}>Projects</a>
			<a href={`#${Sections.ABOUT_ME}`}>About me</a>
		</div>
	</div>
</div>

<script lang="ts">
	import { Sections } from '$lib/constants/sections';
	import type { NavBarProps } from './NavBarProps';
	const { info }: NavBarProps = $props();
	const { name, social } = info;
</script>

<div class="h-16">
	<div class="flex place-content-between p-6">
		<div>
			<a href={social.linkedin}><span>{name}</span></a>
		</div>
		<div class="flex gap-7">
			<a href={`#${Sections.PROJECTS}`}>Projects</a>
			<a href={`#${Sections.ABOUT_ME}`}>About me</a>
		</div>
	</div>
</div>

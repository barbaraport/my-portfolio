<script lang="ts">
	import type { NavBarProps } from './NavBarProps';
	const { personName }: NavBarProps = $props();
</script>

<div class="h-16">
	<div class="flex place-content-between p-6">
		<div>
			<span>{personName}</span>
		</div>
		<div class="flex gap-7">
			<a href="/projects">Projects</a>
			<a href="/about-me">About me</a>
		</div>
	</div>
</div>

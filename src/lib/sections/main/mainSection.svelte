<script lang="ts">
	import type { MainSectionProps } from '$lib/components/dtos/MainSectionProps';
	import Navbar from '$lib/components/navbar.svelte';
	let { name }: MainSectionProps = $props();
</script>

<Navbar {name} />
<div class="bg h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat">
	<div class="flex h-full flex-col items-center justify-center">
		<div class="flex h-1/2 flex-col items-center justify-end gap-2.5">
			<span class="text-xl"
				>Looking for an expert software developer? Let's work together to find your solution.</span
			>
			<span class="text-5xl font-medium">Building the future, one line of code at a time.</span>
			<span class="text-sm"
				>Photo by <a
					href="https://unsplash.com/@mitchel3uo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					>Mitchell Luo</a
				>
				on
				<a
					href="https://unsplash.com/photos/black-and-white-striped-textile-FWoq_ldWlNQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					>Unsplash</a
				>
			</span>
		</div>
		<div class="flex h-1/2 flex-col items-center justify-end">
			<div class="mb-5">
				<img src="/src/assets/icons/arrow.png" alt="arrow down" />
			</div>
		</div>
	</div>
</div>

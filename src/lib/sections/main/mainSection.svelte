<script lang="ts">
	import type { MainSectionProps } from '$lib/sections/main/MainSectionProps';
	import { NavBarHeight } from '$lib/constants/components';
</script>

<div class={`bg h-[calc(100vh-${NavBarHeight})] bg-cover bg-center bg-no-repeat px-4`}>
	<div class="flex h-full flex-col items-center justify-center">
		<div class="center flex h-1/2 flex-col items-center justify-end gap-2.5 text-center">
			<span class="max-[644px]:text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl"
				>Looking for an expert software developer? Let's work together to find your solution.</span
			>
			<span
				class="font-medium max-[644px]:text-lg sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
				>Building the future, one line of code at a time.</span
			>
			<span class="text-xs"
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
				<img src="assets/icons/arrow.png" alt="arrow down" />
			</div>
		</div>
	</div>
</div>

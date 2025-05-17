<script lang="ts">
	import type { FooterProps } from './FooterProps';

	const { info }: FooterProps = $props();
	const { name, social } = info;
</script>

<div class="min-h-24">
	<hr class="border-divider" />
	<div class="flex h-full w-full items-center justify-end p-6">
		<div class="grid h-full w-full grid-cols-1 items-center justify-between gap-3 md:grid-cols-3">
			<div class="col-start-1 flex flex-col items-center justify-center text-center md:col-start-2">
				<span><a href={social.linkedin}>{name}</a> © {`${new Date().getFullYear()}`}</span>
				<div class="text-xs">
					<span>Made with </span>
					<a class="font-medium" href="https://svelte.dev/">Svelte</a>
					<span>and </span>
					<a class="font-medium" href="https://tailwindcss.com/">Tailwind CSS</a>
					<span>{'<3'}</span>
				</div>
			</div>
			<div class="col-start-1 flex items-center justify-center gap-6 md:col-start-3 md:justify-end">
				<a href={social.linkedin}
					><img
						src="assets/icons/linkedin.png"
						alt="icon that when clicked, redirects to my LinkedIn profile."
					/></a
				>
				<a href={social.github}
					><img
						src="assets/icons/github.png"
						alt="icon that when clicked, redirects to my Github profile."
					/></a
				>
				<!-- <a href={social.youtube}
					><img
						src="assets/icons/youtube.png"
						alt="icon that when clicked, redirects to my YouTube channel."
					/></a
				> -->
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import type { FooterProps } from './FooterProps';

	const { info }: FooterProps = $props();
	const { name, social } = info;
</script>

<div class="h-24">
	<hr class="border-divider" />
	<div class="flex h-full w-full items-center justify-end p-6">
		<div class="grid h-full w-full grid-cols-3 items-center justify-between">
			<div class="col-start-2 flex flex-col items-center justify-center">
				<span><a href={social.linkedin}>{name}</a> © {`${new Date().getFullYear()}`}</span>
				<div class="text-xs">
					<span>Made with </span>
					<a class="font-medium" href="https://svelte.dev/">Svelte</a>
					<span>and </span>
					<a class="font-medium" href="https://tailwindcss.com/">Tailwind CSS</a>
					<span>{'<3'}</span>
				</div>
			</div>
			<div class="col-start-3 flex items-center justify-end gap-6">
				<a href={social.linkedin}
					><img
						src="/src/assets/icons/linkedin.png"
						alt="icon that when clicked, redirects to my LinkedIn profile."
					/></a
				>
				<a href={social.github}
					><img
						src="/src/assets/icons/github.png"
						alt="icon that when clicked, redirects to my Github profile."
					/></a
				>
				<!-- <a href={social.youtube}
					><img
						src="/src/assets/icons/youtube.png"
						alt="icon that when clicked, redirects to my YouTube channel."
					/></a
				> -->
			</div>
		</div>
	</div>
</div>

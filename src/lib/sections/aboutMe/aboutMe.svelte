<script lang="ts">
	import type { AboutMeSectionProps } from '$lib/components/dtos/AboutMeSectionProps';
	import Experience from '$lib/components/experience.svelte';
	import Skill from '$lib/components/skill.svelte';

	const { info }: AboutMeSectionProps = $props();
</script>

<div class="min-h-[calc(100vh-96px)]">
	<div class="flex flex-col items-center justify-center gap-3">
		<div class="mx-6 flex flex-col gap-6 py-3">
			<div class="flex flex-col items-center justify-center gap-3">
				<span class="text-4xl font-semibold">About me</span>
				<div class="text-2xl">
					<span>Nice to meet you. I'm </span>
					<span class="font-bold">{info.name}</span><span>.</span>
				</div>
			</div>
			<div class="flex w-full content-between gap-3">
				<div class="flex w-full items-center justify-center">
					<img
						src={info.photo.url}
						aria-hidden="true"
						class="rounded-full"
						width="256"
						alt={info.photo.alt}
					/>
				</div>
				<div class="w-full">
					<div class="mb-4"><span class="text-xl">Overview</span></div>
					<ul role="list" class="marker:--color-text ml-6 list-disc">
						{#each info.description as paragraph}
							<li>{paragraph}</li>
						{/each}
					</ul>

					<div class="my-4">
						<span class="text-xl">Top Skills</span>
					</div>
					<div class="flex flex-wrap gap-3">
						{#each info.skills as skill}
							<Skill name={skill.name} />
						{/each}
					</div>
				</div>
				<!-- <div class="w-full">
					<div class="mb-4"><span class="text-xl">Work</span></div>
					<div class="flex flex-col gap-4">
						{#each info.work as work}
							<Experience experience={work} />
						{/each}
					</div>
				</div> -->
				<div class="w-full">
					<div class="mb-4">
						<span class="text-xl">Education</span>
					</div>
					<div class="flex flex-col gap-4">
						{#each info.education as education}
							<Experience experience={education} />
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="mb-3 flex w-full items-center justify-center text-nowrap">
			<a href={info.social.linkedin} class="flex gap-3 text-4xl font-bold"
				>Let's work together
				<div class="flex items-center justify-center">
					<img
						width="24"
						src="/src/assets/icons/external-link.png"
						alt="external link to my LinkedIn profile."
					/>
				</div>
			</a>
		</div>
	</div>
</div>

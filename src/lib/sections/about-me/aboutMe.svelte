<script lang="ts">
	import type { AboutMeSectionProps } from '$lib/sections/about-me/AboutMeProps';
	import Experience from '$lib/components/experience/experience.svelte';
	import Skill from '$lib/components/skill/skill.svelte';
	import { Sections } from '$lib/constants/sections';
	import SectionTitle from '$lib/components/sectionTitle/sectionTitle.svelte';
	import SectionSubtitle from '$lib/components/sectionSubtitle/sectionSubtitle.svelte';

	const { info }: AboutMeSectionProps = $props();
	const { name, description, skills, education, social, photo } = info;
</script>

<div id={Sections.ABOUT_ME}>
	<div class="flex flex-col items-center justify-center gap-3">
		<div class="mx-6 flex flex-col gap-6 py-3">
			<div class="flex flex-col items-center justify-center gap-3">
				<SectionTitle text="About me" />
				<SectionSubtitle>
					<span>Nice to meet you. I'm </span>
					<span class="font-bold">{name}</span><span>.</span>
				</SectionSubtitle>
			</div>
			<div class="flex w-full flex-col content-between gap-4 lg:flex-row">
				<div class="flex w-full items-center justify-center">
					<img
						src={photo.url}
						aria-hidden="true"
						class="rounded-full"
						width="256"
						alt={photo.alt}
					/>
				</div>
				<div class="w-full">
					<div class="mb-4"><span class="text-xl">Overview</span></div>
					<ul role="list" class="marker:--color-text ml-6 list-disc">
						{#each description as paragraph}
							<li>{paragraph}</li>
						{/each}
					</ul>

					<div class="my-4">
						<span class="text-xl">Top Skills</span>
					</div>
					<div class="flex flex-wrap gap-3">
						{#each skills as skill}
							<Skill name={skill.name} />
						{/each}
					</div>
				</div>
				<!-- <div class="w-full">
					<div class="mb-4"><span class="text-xl">Work</span></div>
					<div class="flex flex-col gap-4">
						{#each work as work}
							<Experience experience={work} />
						{/each}
					</div>
				</div> -->
				<div class="w-full">
					<div class="mb-4">
						<span class="text-xl">Education</span>
					</div>
					<div class="flex flex-col gap-4">
						{#each education as education}
							<Experience experience={education} />
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="mb-3 flex w-full items-center justify-center text-nowrap">
			<SectionSubtitle>
				<a href={social.linkedin} class="flex gap-3 font-bold"
					>Let's work together
					<div class="flex items-center justify-center">
						<img
							src="/assets/icons/external-link.png"
							alt="external link to my LinkedIn profile."
							class="h-4 w-4"
						/>
					</div>
				</a>
			</SectionSubtitle>
		</div>
	</div>
</div>

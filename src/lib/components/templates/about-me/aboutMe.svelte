<script lang="ts">
	import SectionSubtitle from '$lib/components/atoms/sectionSubtitle/sectionSubtitle.svelte';
	import SectionTitle from '$lib/components/atoms/sectionTitle/sectionTitle.svelte';
	import Skill from '$lib/components/atoms/skill/skill.svelte';
	import Experience from '$lib/components/molecules/experience/experience.svelte';
	import { Sections } from '$lib/constants/sections';
	import type { AboutMeSectionProps } from './AboutMeProps';

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
					<img src={photo.url} class="rounded-full" width="256" alt={photo.alt} />
				</div>
				<div class="w-full">
					<div class="mb-4"><span class="text-xl">Overview</span></div>
					<ul class="ml-6 list-disc text-current">
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
				<div class="w-full">
					<div class="mb-4">
						<span class="text-xl">Education</span>
					</div>
					<div class="flex flex-col gap-4">
						{#each education as experience}
							<Experience {experience} />
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

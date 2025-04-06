<script lang="ts">
	import Project from '$lib/components/project.svelte';
	import Skill from '$lib/components/skill.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="h-16">
	<div class="flex place-content-between p-6">
		<div>
			<span>{data.info.name}</span>
		</div>
		<div class="flex gap-7">
			<a href="/projects">Projects</a>
			<a href="/about-me">About me</a>
		</div>
	</div>
</div>
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

<div class="min-h-dvh">
	<div class="flex flex-col items-center justify-center gap-3 py-3">
		<span class="text-4xl font-semibold">Projects</span>
		<div class="text-2xl">
			<span>Quality</span>
			<span class="font-light">in code, </span>
			<span>excellence </span>
			<span class="font-light">in delivery.</span>
		</div>
	</div>
	<div class="mx-6 flex flex-col items-center gap-3">
		{#each data?.projects as project}
			<Project
				name={project?.name}
				description={project?.description}
				image={project?.image}
				skills={project?.skills}
			/>
		{/each}
	</div>
</div>

<div class="h-[calc(100vh-96px)]">
	<div class="flex flex-col items-center justify-center gap-3">
		<div class="mx-6 flex flex-col gap-6 py-3">
			<div class="flex flex-col items-center justify-center gap-3">
				<span class="text-4xl font-semibold">About me</span>
				<div class="text-2xl">
					<span>Nice to meet you. I'm </span>
					<span class="font-bold">{data.info.name}</span><span>.</span>
				</div>
			</div>
			<div class="flex w-full content-between gap-3">
				<div class="flex w-full items-center justify-center">
					<img
						src="/src/assets/me.png"
						aria-hidden="true"
						class="rounded-full"
						width="256"
						alt="Barbara's profile picture. The picture has a black background. She is a woman with a black t-shirt, that has curly and short hair. Also, she uses glasses."
					/>
				</div>
				<div class="w-full">
					<div class="mb-4"><span class="text-xl">Overview</span></div>
					<ul role="list" class="marker:--color-text ml-6 list-disc">
						{#each data.info.description as paragraph}
							<li>{paragraph}</li>
						{/each}
					</ul>

					<div class="my-4">
						<span class="text-xl">Top Skills</span>
					</div>
					<div class="flex flex-wrap gap-3">
						{#each data.info.skills as skill}
							<Skill name={skill.name} />
						{/each}
					</div>
				</div>
				<div class="w-full">
					<div class="mb-4"><span class="text-xl">Work</span></div>
					<div class="flex flex-col gap-4">
						{#each data.info.work as work}
							<div>
								<div class="flex justify-between">
									<span>{work.name}</span>
									<span
										>({new Date(work.startDate).getFullYear()} - {new Date(
											work.endDate
										).getFullYear()})</span
									>
								</div>
								<ul role="list" class="marker:--color-text ml-6 list-disc">
									{#each work.description as paragraph}
										<li>{paragraph}</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
				<div class="w-full">
					<div class="mb-4">
						<span class="text-xl">Education</span>
					</div>
					<div class="flex flex-col gap-4">
						{#each data.info.education as education}
							<div>
								<div class="flex justify-between">
									<span>{education.name}</span>
									<span
										>({new Date(education.startDate).getFullYear()} - {new Date(
											education.endDate
										).getFullYear()})</span
									>
								</div>
								<ul role="list" class="marker:--color-text ml-6 list-disc">
									{#each education.description as paragraph}
										<li>{paragraph}</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="flex w-full items-center justify-center text-nowrap">
			<a href="https://linkedin.com/in/barbaraport" class="flex gap-3 text-4xl font-bold"
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

<div class="h-24">
	<hr class="border-divider" />
	<div class="flex h-full w-full items-center justify-end p-6">
		<div class="grid h-full w-full grid-cols-3 items-center justify-between">
			<div class="col-start-2 flex flex-col items-center justify-center">
				<span>{data.info.name} © {`${new Date().getFullYear()}`}</span>
				<div class="text-xs">
					<span>Made with </span>
					<span class="font-medium">Svelte</span>
					<span>and </span>
					<span class="font-medium">Tailwind CSS</span>
					<span>{'<3'}</span>
				</div>
			</div>
			<div class="col-start-3 flex items-center justify-end gap-6">
				<a href="https://linkedin.com/in/barbaraport"
					><img
						src="/src/assets/icons/linkedin.png"
						alt="icon that when clicked, redirects to my LinkedIn profile."
					/></a
				>
				<a href="https://github.com/barbaraport"
					><img
						src="/src/assets/icons/github.png"
						alt="icon that when clicked, redirects to my Github profile."
					/></a
				>
				<a href="https://www.youtube.com/"
					><img
						src="/src/assets/icons/youtube.png"
						alt="icon that when clicked, redirects to my YouTube channel."
					/></a
				>
			</div>
		</div>
	</div>
</div>

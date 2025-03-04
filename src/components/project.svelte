<script>
	import Skill from './skill.svelte';
</script>

<div class="flex rounded-lg border">
	<div class="w-1/2">
		<img
			src="/src/assets/bg.jpg"
			alt="project's splashscreen"
			class="rounded-tl-lg rounded-bl-lg"
		/>
	</div>
	<div class="m-6 flex w-1/2 flex-col justify-between">
		<div>
			<span class="text-xl font-bold">My First Project</span>
			<ul role="list" class="marker:--color-text ml-6 list-disc">
				<li>first item</li>
				<li>second item</li>
				<li>third item</li>
			</ul>
		</div>
		<div class="flex flex-wrap gap-3">
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
		</div>
	</div>
</div>

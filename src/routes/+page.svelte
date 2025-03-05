<script>
	import { FileGatewayFactory } from '../apis/factories/FileGatewayFactory';
	import Project from '../components/project.svelte';

	let data = $state({});

	const gateway = FileGatewayFactory.create();

	$effect(() => {
		gateway.fetch().then((data) => {
			data = data;
		});
	});
</script>

<div class="h-16">
	<div class="flex place-content-between p-6">
		<div>
			<span>Bárbara Port</span>
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
				>Looking for an expert software developer? Let’s work together to find your solution.</span
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
		<Project answer={'asdlfjsdkjdsjkfdhsdfh'} />
		<Project answer={'asdlfjsdkjdsjkfdhsdfh'} />
		<Project answer={'asdlfjsdkjdsjkfdhsdfh'} />
		<Project answer={'asdlfjsdkjdsjkfdhsdfh'} />
	</div>
</div>

<div class="h-dvh border">about me</div>

<div class="h-24 border">footer</div>

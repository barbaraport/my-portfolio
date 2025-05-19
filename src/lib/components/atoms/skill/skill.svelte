<script lang="ts">
	import type { SkillProps } from './SkillProps';

	const { name }: SkillProps = $props();
</script>

<div class="w-min rounded-lg border px-2 py-1 text-nowrap"><span>{name}</span></div>

<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type { PageData } from './$types.js';

	const { data }: { data: PageData } = $props();

	let src = $state(data.src);
</script>

<div class="flex flex-col max-w-prose mx-auto gap-20">
	<textarea class=" w-full mx-auto form-textarea rounded" bind:value={src} rows="8"></textarea>
	<article class="prose prose-lg prose-slate dark:prose-invert">
		<Markdown {src} />
	</article>
</div>

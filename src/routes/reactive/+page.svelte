<script lang="ts">
	import astFromString from '$lib/defaults/ast-from-string.js';
	import { Markdown } from '$lib/index.js';
	import type { PageData } from './$types.js';

	const { data }: { data: PageData } = $props();

	let value = $state(data.src);
	let ast = $derived.by(() => astFromString(value));
</script>

<div class="flex flex-col max-w-prose mx-auto gap-20">
	<article class="prose prose-lg prose-slate dark:prose-invert">
		<h1><code>src =</code></h1>
		<textarea class=" w-full mx-auto form-textarea rounded" bind:value rows="8"></textarea>
		<hr />
		<Markdown {ast} />
	</article>
</div>

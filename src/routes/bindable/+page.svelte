<script lang="ts">
	import { Markdown } from '$lib/index.js';
	import type { PageData } from './$types.js';

	const { data }: { data: PageData } = $props();

	let ast = $state<import('mdast').Root | undefined>();
	let src = $state(data.src);

	const prune = (key: string, value: unknown) => (key === 'position' ? undefined : value);
</script>

<div class="flex flex-col max-w-prose mx-auto gap-20">
	<article class="prose prose-lg prose-slate dark:prose-invert">
		<h1><code>src =</code></h1>
		<textarea class=" w-full mx-auto form-textarea rounded" bind:value={src} rows="8"></textarea>
		<hr />
		<h1><code>ast =</code></h1>
		<textarea
			class=" w-full mx-auto form-textarea rounded"
			value={JSON.stringify(ast, prune, 4)}
			readonly
			rows="8"
		></textarea>
		<hr />
		<Markdown bind:ast {src} />
	</article>
</div>

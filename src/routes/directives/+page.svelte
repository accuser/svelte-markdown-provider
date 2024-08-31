<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import astFromString from '$lib/markdown/ast-from-string.js';
	import type { PageData } from './$types.js';
	import ExampleContainer from './ExampleContainer.svelte';
	import ExampleLeaf from './ExampleLeaf.svelte';
	import Highlight from './Highlight.svelte';

	const { data }: { data: PageData } = $props();

	const ast = $derived.by(() => astFromString(data.src));
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown
		{ast}
		directives={{
			containerDirective: { exampleContainer: ExampleContainer },
			leafDirective: { exampleLeaf: ExampleLeaf },
			textDirective: { hl: Highlight }
		}}
	/>
</article>

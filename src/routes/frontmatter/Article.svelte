<script lang="ts" module>
	export type Props = import('mdast').Root;
</script>

<script lang="ts">
	import { getUnistContext, Node } from '@accuser/svelte-unist';

	const { getFrontmatter } = getUnistContext();

	const { children }: Props = $props();

	let frontmatter = $derived.by(() => getFrontmatter?.());
	let { intro, title } = $derived(frontmatter ? frontmatter : {});
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<h1>{title}</h1>
	<p class="lead">{intro}</p>
	<hr />
	<pre><code>{JSON.stringify(frontmatter, undefined, 4)}</code></pre>
	<hr />
	<main>
		{#each children as node}
			<Node {...node} />
		{/each}
	</main>
</article>

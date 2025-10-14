<script lang="ts" module>
	export type Props = import('mdast').Root;
</script>

<script lang="ts">
	import { getUnistContext, Node } from '@accuser/svelte-unist';

	const { getFrontmatter } = getUnistContext();

	const { children }: Props = $props();

	let frontmatter = $derived(getFrontmatter?.() ?? {});

	let { intro, title } = $derived(frontmatter);
</script>

<header>
	<h1>{title}</h1>
	<p class="lead">{intro}</p>
</header>
<main>
	<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
		<pre><code>{JSON.stringify(frontmatter, undefined, 4)}</code></pre>
		<hr />
		<main>
			{#each children as child}
				<Node node={child} />
			{/each}
		</main>
	</article>
</main>

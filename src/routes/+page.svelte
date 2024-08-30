<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import astFromString from '$lib/markdown/ast-from-string.js';
	import { parse } from 'yaml';
	import type { PageData } from './$types.js';

	const { data }: { data: PageData } = $props();

	const { ast, frontmatter } = $derived.by(() => {
		const ast = astFromString(data.src);

		const frontmatter =
			ast.type === 'root' && ast.children && ast.children[0].type === 'yaml'
				? parse((ast.children.shift() as import('mdast').Yaml).value)
				: undefined;

		return { ast, frontmatter };
	});

	const { title } = $derived(frontmatter);
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	{#if frontmatter}
		<header>
			<h1>{title}</h1>
		</header>
	{/if}
	<main>
		<Markdown {ast} />
	</main>
</article>

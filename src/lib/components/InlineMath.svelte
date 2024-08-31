<script lang="ts">
	import katex from 'katex';

	const { node }: { node: import('mdast-util-math').InlineMath } = $props();

	const { data, value } = $derived(node);

	const html = $derived.by(() =>
		katex.renderToString(value, {
			throwOnError: false,
			displayMode: false,
			output: 'html'
		})
	);
</script>

<code class="language-math math-inline">{@html html}</code>

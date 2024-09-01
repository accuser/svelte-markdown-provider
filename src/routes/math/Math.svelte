<script lang="ts">
	import katex from 'katex';

	const { node }: { node: import('mdast-util-math').Math } = $props();

	const { meta, value } = $derived(node);

	const mathml = $derived.by(() =>
		katex.renderToString(value, {
			throwOnError: false,
			displayMode: true,
			output: 'mathml'
		})
	);
</script>

<code class="language-math math-display" data-meta={meta}>{@html mathml}</code>

<script lang="ts">
	import katex from 'katex';

	const { node }: { node: import('mdast-util-math').Math } = $props();

	const { data, meta, value } = $derived(node);

	const mathml = $derived.by(() =>
		katex.renderToString(value, {
			throwOnError: false,
			displayMode: true,
			output: 'mathml'
		})
	);
</script>

<pre><code class="language-math math-display" data-meta={meta}>{@html mathml}</code></pre>

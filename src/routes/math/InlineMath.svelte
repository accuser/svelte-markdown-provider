<script lang="ts">
	import katex from 'katex';

	const { node }: { node: import('mdast-util-math').InlineMath } = $props();

	const { value } = $derived(node);

	const mathml = $derived.by(() =>
		katex.renderToString(value, {
			throwOnError: false,
			displayMode: false,
			output: 'mathml'
		})
	);
</script>

<code class="language-math math-inline">{@html mathml}</code>

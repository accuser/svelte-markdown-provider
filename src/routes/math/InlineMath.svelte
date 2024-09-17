<script lang="ts">
	import katex from 'katex';

	const { value }: import('mdast-util-math').InlineMath = $props();

	const mathml = $derived.by(() =>
		katex.renderToString(value, {
			throwOnError: false,
			displayMode: false,
			output: 'mathml'
		})
	);
</script>

<code class="language-math math-inline">{@html mathml}</code>

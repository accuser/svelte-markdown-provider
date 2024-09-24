<script lang="ts" module>
	export type Props = import('mdast-util-math').Math;
</script>

<script lang="ts">
	import katex from 'katex';

	let { meta, value }: Props = $props();

	let mathml = $derived.by(() =>
		katex.renderToString(value, {
			throwOnError: false,
			displayMode: true
		})
	);
</script>

{@html mathml}

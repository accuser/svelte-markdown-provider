<script lang="ts" module>
	export type Props = import('mdast-util-math').Math;
</script>

<script lang="ts">
	import katex from 'katex';

	const { meta, value }: Props = $props();

	const mathml = $derived.by(() =>
		katex.renderToString(value, {
			throwOnError: false,
			displayMode: true
		})
	);
</script>

{@html mathml}

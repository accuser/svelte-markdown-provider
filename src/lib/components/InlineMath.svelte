<script lang="ts" module>
	export type Props = import('mdast-util-math').InlineMath;
</script>

<script lang="ts">
	import katex from 'katex';

	const { value }: Props = $props();

	const mathml = $derived.by(() => katex.renderToString(value, { throwOnError: false }));
</script>

{@html mathml}

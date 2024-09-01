<script lang="ts">
	const { node }: { node: import('mdast-util-math').Math } = $props();

	const { meta, value } = $derived(node);
</script>

<code class="language-math math-display" data-meta={meta}>{value}</code>

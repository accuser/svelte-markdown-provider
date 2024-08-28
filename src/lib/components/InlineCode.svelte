<script lang="ts">
	const { node }: { node: import('mdast').InlineCode } = $props();

	const { data, value } = $derived(node);
</script>

<code>{value}</code>

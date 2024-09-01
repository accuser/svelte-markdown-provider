<script lang="ts">
	const { node }: { node: import('mdast').InlineCode } = $props();

	const { value } = $derived(node);
</script>

<code>{value}</code>

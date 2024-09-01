<script lang="ts">
	const { node }: { node: import('mdast').Text } = $props();

	const { value } = $derived(node);
</script>

{value}

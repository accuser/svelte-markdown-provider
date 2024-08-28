<script lang="ts">
	const { node }: { node: import('mdast').Text } = $props();

	const { data, value } = $derived(node);
</script>

{value}

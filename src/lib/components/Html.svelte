<script lang="ts">
	const { node }: { node: import('mdast').Html } = $props();

	const { value } = $derived(node);
</script>

{@html value}

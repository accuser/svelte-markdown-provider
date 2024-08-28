<script lang="ts">
	const { node }: { node: import('mdast').Html } = $props();

	const { data, value } = $derived(node);
</script>

{@html value}

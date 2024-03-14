<script lang="ts">
	export let node: import('mdast').Html;

	const { value } = node;
</script>

{@html value}

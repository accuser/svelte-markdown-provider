<script lang="ts">
	export let node: import('mdast').InlineCode;

	const { value } = node;
</script>

<code>{value}</code>

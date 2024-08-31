<script lang="ts">
	const { node }: { node: import('mdast-util-math').InlineMath } = $props();

	const { data, value } = $derived(node);
</script>

<code class="language-math math-inline">{value}</code>

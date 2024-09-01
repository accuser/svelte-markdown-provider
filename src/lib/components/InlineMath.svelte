<script lang="ts">
	const { node }: { node: import('mdast-util-math').InlineMath } = $props();

	const { value } = $derived(node);
</script>

<code class="language-math math-inline">{value}</code>

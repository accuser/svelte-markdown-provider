<script lang="ts">
	import Node from '$lib/components/Node.svelte';

	const { node }: { node: import('mdast-util-directive').LeafDirective } = $props();

	const { attributes, children, data, name } = $derived(node);
</script>

<div class={name}>
	<strong>Example Leaf</strong>
	<pre><code>attributes = {JSON.stringify(attributes, null, 2)}</code></pre>
	{#each children as node}<Node {node} />{/each}
</div>

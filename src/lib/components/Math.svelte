<script lang="ts">
	const { node }: { node: import('mdast-util-math').Math } = $props();

	const { data, meta, value } = $derived(node);
</script>

<pre><code class="language-math math-display" data-meta={meta}>{value}</code></pre>

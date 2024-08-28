<script lang="ts">
	const { node }: { node: import('mdast').Code } = $props();

	const { data, lang, meta, value } = $derived(node);
</script>

<pre><code {lang} data-meta={meta}>{value}</code></pre>

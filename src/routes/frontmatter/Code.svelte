<script lang="ts">
	let { node }: { node: import('mdast').Code } = $props();

	let { lang, meta, value } = $derived(node);
</script>

<figure>
	<figcaption><code>{meta ?? lang}</code></figcaption>
	<pre><code class="language-{lang}" {lang} data-meta={meta}>{value}</code></pre>
</figure>

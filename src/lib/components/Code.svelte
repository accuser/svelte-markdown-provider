<script lang="ts">
	export let node: import('mdast').Code;

	const { lang, meta, value } = node;
</script>

<pre><code {lang} data-meta={meta}>{value}</code></pre>

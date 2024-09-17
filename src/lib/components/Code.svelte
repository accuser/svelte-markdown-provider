<script lang="ts">
	const { lang, meta, value }: import('mdast').Code = $props();
</script>

<pre><code {lang} data-meta={meta}>{value}</code></pre>

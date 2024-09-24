<script lang="ts" module>
	export type Props = import('mdast').Code;
</script>

<script lang="ts">
	let { lang, meta, value }: Props = $props();
</script>

<pre><code {lang} data-meta={meta}>{value}</code></pre>

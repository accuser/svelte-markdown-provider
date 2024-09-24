<script lang="ts" module>
	export type Props = import('mdast').Code;
</script>

<script lang="ts">
	let { lang, meta, value }: Props = $props();
</script>

<figure>
	<figcaption><code>{meta}</code></figcaption>
	<pre><code {lang} data-meta={meta}>{value}</code></pre>
</figure>

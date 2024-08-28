<script lang="ts">
	const { node }: { node: import('mdast').Image } = $props();

	const { alt, data, url, title } = $derived(node);
</script>

<img src={url} {alt} {title} />

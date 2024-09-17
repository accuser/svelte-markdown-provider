<script lang="ts">
	const { alt, url, title }: import('mdast').Image = $props();
</script>

<img src={url} {alt} {title} />

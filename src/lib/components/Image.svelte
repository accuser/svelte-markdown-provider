<script lang="ts">
	export let node: import('mdast').Image;

	const { alt, url, title } = node;
</script>

<img src={url} {alt} {title} />

<script lang="ts" module>
	export type Props = import('mdast').Image;
</script>

<script lang="ts">
	const { alt, url, title }: Props = $props();
</script>

<img src={url} {alt} {title} />

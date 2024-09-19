<script lang="ts" module>
	export type Props = import('mdast').InlineCode;
</script>

<script lang="ts">
	const { value }: Props = $props();
</script>

<code>{value}</code>

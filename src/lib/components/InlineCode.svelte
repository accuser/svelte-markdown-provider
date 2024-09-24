<script lang="ts" module>
	export type Props = import('mdast').InlineCode;
</script>

<script lang="ts">
	let { value }: Props = $props();
</script>

<code>{value}</code>

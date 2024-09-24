<script lang="ts" module>
	export type Props = import('mdast').Html;
</script>

<script lang="ts">
	let { value }: Props = $props();
</script>

{@html value}

<script lang="ts" module>
	export type Props = import('mdast').Text;
</script>

<script lang="ts">
	let { value }: Props = $props();
</script>

{value}

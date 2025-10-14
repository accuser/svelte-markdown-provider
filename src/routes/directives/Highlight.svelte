<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import './highlight.css';

	let { node }: { node: import('mdast-util-directive').TextDirective } = $props();

	let { attributes, children } = $derived(node);
	let { bg = 'yellow' } = $derived(attributes as { bg: 'pink' | 'yellow' });
</script>

<span class="px-0.5 -mx-0.5 {bg}"
	>{#each children as child}<Node node={child} />{/each}</span
>

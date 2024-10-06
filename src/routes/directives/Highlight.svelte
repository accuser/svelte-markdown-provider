<script lang="ts">
	import { Node } from '@accuser/svelte-unist';

	const { attributes, children }: import('mdast-util-directive').TextDirective = $props();

	const { bg = 'yellow' } = $derived(attributes as { bg: 'pink' | 'yellow' });
</script>

<span class={bg}
	>{#each children as node}<Node {...node} />{/each}</span
>

<style lang="postcss">
	span {
		@apply px-0.5 -mx-0.5;
	}

	span.pink {
		@apply bg-pink-200;
	}

	span.yellow {
		@apply bg-yellow-200;
	}
</style>

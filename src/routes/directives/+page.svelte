<script lang="ts">
	import { Markdown } from '$lib/components/index.js';
	import type { PageProps } from './$types.js';
	import Highlight from './Highlight.svelte';
	import Success from './Success.svelte';
	import YouTube from './YouTube.svelte';

	const { data }: PageProps = $props();

	const { ast } = $derived(data);
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown
		{ast}
		containerDirectives={{ success: Success }}
		leafDirectives={{ youtube: YouTube }}
		textDirectives={{ hl: Highlight }}
	/>
</article>

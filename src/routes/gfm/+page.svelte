<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type { PageData } from './$types.js';
	import ListItem from './ListItem.svelte';

	const { data }: { data: PageData } = $props();

	const { src } = $derived(data);
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown {src} components={{ listItem: ListItem }} />
</article>

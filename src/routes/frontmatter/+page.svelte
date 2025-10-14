<script lang="ts">
	import { Markdown } from '$lib/components/index.js';
	import type { PageData } from './$types.js';
	import Article from './Article.svelte';
	import Code from './Code.svelte';

	const { data }: { data: PageData } = $props();

	let { ast } = $derived(data);
</script>

<Markdown {ast} components={{ code: Code, root: Article }} />

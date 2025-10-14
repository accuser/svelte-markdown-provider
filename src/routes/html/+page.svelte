<script lang="ts">
	import { Markdown } from '$lib/components/index.js';
	import type { PageData } from './$types.js';

	const { data }: { data: PageData } = $props();

	const { ast } = $derived(data);
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Markdown {ast} />
</article>

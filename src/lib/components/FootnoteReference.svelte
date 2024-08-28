<script lang="ts">
	const { node }: { node: import('mdast').FootnoteReference } = $props();

	const { data, identifier, label } = $derived(node);
</script>

<sup
	><a id="footnode-ref-{identifier}" href="#footnote-{identifier}" aria-describedby="footnote-label"
		>{label}</a
	></sup
>

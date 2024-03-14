<script lang="ts">
	export let node: import('mdast').FootnoteReference;

	const { identifier, label } = node;
</script>

<sup
	><a id="footnode-ref-{identifier}" href="#footnote-{identifier}" aria-describedby="footnote-label"
		>{label}</a
	></sup
>

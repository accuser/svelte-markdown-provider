<script lang="ts">
	const { identifier, label }: import('mdast').FootnoteReference = $props();
</script>

<sup
	><a id="footnode-ref-{identifier}" href="#footnote-{identifier}" aria-describedby="footnote-label"
		>{label}</a
	></sup
>

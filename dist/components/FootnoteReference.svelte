<script lang="ts" module>
	export type Props = import('mdast').FootnoteReference;
</script>

<script lang="ts">
	let { identifier, label }: Props = $props();
</script>

<sup
	><a id="footnote-ref-{identifier}" href="#footnote-{identifier}" aria-describedby="footnote-label"
		>{label}</a
	></sup
>

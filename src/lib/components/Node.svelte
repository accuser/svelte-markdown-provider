<script lang="ts">
	import { getMarkdownContext } from '$lib/contexts/markdown-context.js';
	import defaultComponents from '$lib/defaults/components.js';
	import isDirective from '$lib/type-guards/is-directive.js';
	import type { Nodes } from 'mdast';
	import type { Component } from 'svelte';

	let node: Nodes = $props();

	const { components, directives } = getMarkdownContext();

	let component = $derived.by(() => (components ? components[node.type] : undefined));

	let directive = $derived.by(() => {
		if (directives && isDirective(node)) {
			const { name, type } = node;

			if (directives[type] && directives[type][name]) {
				return directives[type][name];
			}
		}
	});

	let Node = $derived(directive || component || defaultComponents[node.type]) as Component<Nodes>;
</script>

<Node {...node} />

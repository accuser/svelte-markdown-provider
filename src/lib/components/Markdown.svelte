<script lang="ts">
	import { getContext, setContext, type ComponentType } from 'svelte';

	export let node: import('mdast').Nodes;

	export let components:
		| Record<import('mdast').Nodes['type'], ComponentType | undefined>
		| undefined = undefined;

	export let directives:
		| Record<
				import('mdast-util-directive').Directives['type'],
				Record<string, ComponentType | undefined>
		  >
		| undefined = undefined;

	const _components: typeof components = components
		? setContext('MARKDOWN_COMPONENTS_CONTEXT', components)
		: getContext('MARKDOWN_COMPONENTS_CONTEXT');

	const _directives: typeof directives = directives
		? setContext('MARKDOWN_DIRECTIVES_CONTEXT', directives)
		: getContext('MARKDOWN_DIRECTIVES_CONTEXT');

	const { type } = node;

	let component =
		(type === 'containerDirective' || type === 'leafDirective' || type === 'textDirective') &&
		_directives
			? _directives[type][node.name]
			: _components
				? _components[type]
				: undefined;

	if (!component) {
		console.warn('Unrecognized node:', type);
	}
</script>

<svelte:component this={component} {node} />

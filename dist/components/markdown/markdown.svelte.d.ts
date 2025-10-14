declare const Markdown: import("svelte").Component<{
    ast: import("unist").Node;
} & import("@accuser/svelte-unist").UnistContext, {}, "">;
type Markdown = ReturnType<typeof Markdown>;
export default Markdown;

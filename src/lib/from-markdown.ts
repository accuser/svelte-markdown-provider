import { directiveFromMarkdown } from 'mdast-util-directive';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { mathFromMarkdown } from 'mdast-util-math';
import { directive } from 'micromark-extension-directive';
import { frontmatter } from 'micromark-extension-frontmatter';
import { gfm } from 'micromark-extension-gfm';
import { math } from 'micromark-extension-math';
import { filter } from 'unist-util-filter';
import { is } from 'unist-util-is';
import { visit } from 'unist-util-visit';
import { parse } from 'yaml';

declare module 'mdast' {
	interface RootData {
		matter: Record<string, unknown>;
	}
}

export default (markdown: { toString: () => string }) => {
	const root = fromMarkdown(markdown.toString(), {
		extensions: [directive(), frontmatter(['yaml']), gfm({ singleTilde: false }), math()],
		mdastExtensions: [
			directiveFromMarkdown(),
			frontmatterFromMarkdown(['yaml']),
			gfmFromMarkdown(),
			mathFromMarkdown()
		]
	});

	visit(root, 'yaml', (node) => {
		const matter = parse(node.value);

		root.data = root.data ? { ...root.data, matter } : { matter };
	});

	return filter(root, (node) => !is(node, 'yaml'));
};

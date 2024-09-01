import removeImageParagraph from './remove-image-paragraph.js';
import removeListitemParagraph from './remove-listitem-paragraph.js';

export default () =>
	({
		transforms: [removeImageParagraph, removeListitemParagraph]
	}) satisfies import('mdast-util-from-markdown').Extension;

import { mdastComponents } from '@accuser/svelte-mdast';
import { mdastDirectiveComponents } from '@accuser/svelte-mdast-directive';
export default {
    ...mdastComponents,
    ...mdastDirectiveComponents
};

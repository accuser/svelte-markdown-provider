import {
	isContainerDirective,
	isLeafDirective,
	isTextDirective,
	type TypeGuard
} from '@accuser/mdast-util-directive-type-guards';

export default ((value) =>
	isContainerDirective(value) || isLeafDirective(value) || isTextDirective(value)) as TypeGuard<
	import('mdast-util-directive').Directives
>;

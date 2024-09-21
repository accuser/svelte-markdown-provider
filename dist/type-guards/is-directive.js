import { isContainerDirective, isLeafDirective, isTextDirective } from '@accuser/mdast-util-directive-type-guards';
export default ((value) => isContainerDirective(value) || isLeafDirective(value) || isTextDirective(value));

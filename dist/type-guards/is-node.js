export default (node) => node !== null && node !== undefined && 'type' in node && typeof node.type === 'string';

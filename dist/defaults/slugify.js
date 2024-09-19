export default (str) => str
    .toLowerCase()
    .replace(/[^\w]+/g, '-')
    .replace(/-+/, '-')
    .replace(/^-|-$/g, '');

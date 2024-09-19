export default (str: string) =>
	str
		.toLowerCase()
		.replace(/[^\w]+/g, '-')
		.replace(/-+/, '-')
		.replace(/^-|-$/g, '');

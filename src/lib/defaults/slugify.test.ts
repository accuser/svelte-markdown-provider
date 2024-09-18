import { describe, expect, it } from 'vitest';
import slugify from './slugify.js';

describe('slugify', () => {
	it('should return a slug', () => {
		expect(slugify('Hello, World!')).toBe('hello-world');
	});

	it('should strip leading and trailing spaces', () => {
		expect(slugify('  Hello, World! ')).toBe('hello-world');
	});

	it('should strip leading and trailing hypends', () => {
		expect(slugify('  Hello, World! ')).toBe('hello-world');
	});

	it('should strip special characters', () => {
		expect(slugify('Hello, World!')).toBe('hello-world');
	});
});

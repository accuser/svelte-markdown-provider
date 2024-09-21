import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	server: { host: '0.0.0.0' },
	test: {
		environment: 'jsdom',
		include: ['src/**/*.test.{js,ts}', 'tests/**/*.test.{js,ts}'],
		setupFiles: ['./vitest-setup.js']
	}
});

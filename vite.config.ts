import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: { host: '0.0.0.0' },
	test: {
		environment: 'jsdom',
		include: ['src/**/*.test.{js,ts}', 'tests/**/*.test.{js,ts}'],
		setupFiles: ['./vitest-setup.js']
	}
});

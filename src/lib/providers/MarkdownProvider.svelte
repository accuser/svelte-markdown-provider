<script lang="ts">
	import { defaultComponents } from '$lib/types/components.js';
	import { defaultDirectives } from '$lib/types/directives.js';
</script>

<slot components={defaultComponents} directive={defaultDirectives} />

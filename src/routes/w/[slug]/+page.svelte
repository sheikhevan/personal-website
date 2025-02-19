<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-8">
	<hgroup class="mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">{data.meta.title}</h1>
		<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
			Published at {formatDate(data.meta.date)}
		</p>
	</hgroup>

	<div class="mb-8 flex flex-wrap gap-2">
		{#each data.meta.tags as tag}
			<span
				class="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200"
			>
				&num;{tag}
			</span>
		{/each}
	</div>

	<div class="prose dark:prose-invert max-w-none">
		<data.content />
	</div>
</article>

<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="mx-auto max-w-3xl px-4 py-8">
	<ul class="space-y-8">
		{#each data.posts as post}
			<li class="border-b border-gray-200 pb-6 dark:border-gray-700">
				<a
					href="/w/{post.slug}"
					class="text-2xl font-semibold text-gray-900 transition-colors hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
				>
					{post.title}
				</a>

				<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
					{formatDate(post.date)}
				</p>

				<p class="mt-2 text-gray-700 dark:text-gray-300">
					{post.description}
				</p>
			</li>
		{/each}
	</ul>
</section>

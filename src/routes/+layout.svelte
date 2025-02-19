<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import * as config from '$lib/config';
	import { MoonStar, Github } from 'lucide-svelte';
</script>

<div class="flex min-h-screen flex-col">
	<nav class="flex items-center justify-between p-4">
		<div class="flex flex-1 justify-start">
			<a class="text-inherit" href="/"><b>{config.title}</b></a>
		</div>

		<div class="flex flex-1 justify-center">
			<ul class="flex space-x-5">
				<li><a class="text-inherit" href="/w">Writings</a></li>
				<li><a class="text-inherit" href="/c">Contact</a></li>
				<li><a class="text-inherit" href="/rss.xml">RSS</a></li>
			</ul>
		</div>

		<div class="flex flex-1 justify-end">
			<button onclick={() => console.log('You pressed the button!')}><MoonStar /></button>
		</div>
	</nav>
	<main class="flex-grow">
		{@render children()}
	</main>
	<footer class="mt-auto border-t-1 p-4">
		<a href="https://github.com/sheikhevan"><Github /></a>
	</footer>
</div>

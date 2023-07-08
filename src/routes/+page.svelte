<script lang="ts">
  export let data;
  let dataArray = data.articles.results;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1 class="heading"> Svelte + gutendex Articles</h1>
<div class="card-container">
  {#each dataArray as book}
    <a href={`/post/${book.id}`} class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h2>
      <p class="font-normal text-gray-700 dark:text-gray-400">著者：{book.authors[0].name}</p>
    </a>
  {/each}
  {#if data.articles.length === 0}
    <p>No Articles</p>
  {/if}
</div>
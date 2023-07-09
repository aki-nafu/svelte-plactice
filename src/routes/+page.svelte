<script lang="ts">
  export let data;
  let dataArray = data.articles.results;
  let keyword = '';

  $: filteredData = dataArray.filter(book =>
      book.title.toLowerCase().includes(keyword.toLowerCase()) ||
      book.authors[0].name.toLowerCase().includes(keyword.toLowerCase())
  );
</script>

<svelte:head>
  <title>Gutendex Articles</title>
</svelte:head>

<h1 class="text-center m-6"> Svelte + Gutendex Articles</h1>
<input type="text" bind:value={keyword} class="my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="検索ワード">
<div class="grid gap-x-4 gap-y-5 grid-cols-2">
  {#each filteredData as book}
    <a href={`/post/${book.id}`} class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h2>
      <p class="">著者：{book.authors[0].name}</p>
    </a>
  {/each}
  {#if filteredData.length === 0}
    <p>No Articles</p>
  {/if}
</div>

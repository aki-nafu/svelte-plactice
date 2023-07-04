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
    <a href={`/post/${book.id}`} class="card-item">
      <h2 class="card-heading">{book.title}</h2>
      <p class="card-name">著者：{book.autors[0].name}</p>
    </a>
  {/each}
  {#if data.articles.length === 0}
    <p>No Articles</p>
  {/if}
</div>
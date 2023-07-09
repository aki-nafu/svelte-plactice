<script lang="ts">
  import Button from '../../../components/Button.svelte';
  export let data;
  $: title = data.articles.title;
  $: auther = data.articles.authors[0].name
  $: birth = data.articles.authors[0].birth_year
  $: dead = data.articles.authors[0].death_year;
  $: subjects = data.articles.subjects;
  $: downloadLink = Object.values(data.articles.formats)[1];
</script>

<svelte:head>
  <title>{title} - {auther}</title>
</svelte:head>

<div class="single">
  <div class="back-link"><a href="/">書籍一覧へ戻る</a></div>
  <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h1>
  <p class="name">著者:{auther} <span>{birth} = {dead}</span></p>
  <p class="text">カテゴリ</p>
  <ul class="list">
    {#each subjects as subject}
      <li>{subject}</li>
    {/each}
  </ul>
  <div class="single-button">
    <Button to={downloadLink} text="download" />
  </div>
</div>


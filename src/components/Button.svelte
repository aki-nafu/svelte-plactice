<script lang="ts">
  export let to:any
  export let text:string
</script>

<div>
  <a href={to} target="_blank" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">{text}</a>
</div>

<style>
</style>
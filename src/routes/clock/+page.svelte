<script lang="ts">
  import { onMount } from 'svelte';
  let datetime = ''

  async function fetchTimezone(){
    try{
      const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo');
      if(!response.ok){
        throw new Error('Failed to fetch timezone data')
      }
      const data = await response.json()
      datetime = data.datetime
    } catch(error){
      console.error(error)
    }
  }
  onMount(() => {
    fetchTimezone()
  })
</script>

<h1>Current Time in Tokyo <br> {datetime}</h1>

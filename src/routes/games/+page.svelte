<script lang="ts">
    import { onMount } from 'svelte';
    import gamesData from '$lib/json/games.json';
    
    let games = gamesData.games;
    let loading = true;
    
    onMount(() => {
      loading = false;
    });
  </script>
  
  <main class="min-h-screen relative z-10">
    <div class="container mx-auto p-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold text-white">Games</h1>
        <a href="/" class="btn variant-filled-secondary border-2 border-[#1a365d] hover:border-[#2a4365] rounded-xl">
          <span class="material-icons">home</span>
          Back to Home
        </a>
      </div>
  
      {#if loading}
        <div class="flex justify-center items-center h-64">
          <span class="loading loading-spinner loading-lg">Loading games...</span>
        </div>
      {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {#each games as game}
            <a 
              href={game.source}
              class="card variant-filled bg-surface-900 border-2 border-[#1a365d] hover:border-[#2a4365] transition-all duration-200"
            >
              <img 
                src={game.image} 
                alt={game.name}
                class="w-full aspect-square object-cover rounded-t-xl"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold text-white mb-2">{game.name}</h3>
                <p class="text-gray-300">{game.desc}</p>
              </div>
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </main>
  
  <style>
    :global(body) {
      background-color: var(--primary-dark);
    }
  </style>
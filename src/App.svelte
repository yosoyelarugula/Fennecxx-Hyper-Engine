<script lang="ts">
  import Particles from './lib/Particles.svelte';
  import githubIcon from './assets/github.svg';
  import youtubeIcon from './assets/youtube.svg';
</script>

<Particles />

<main class="h-screen flex flex-col items-center justify-center text-white relative z-10">
  <div class="text-center space-y-8">
    <h1 class="text-6xl font-bold mb-4 text-white">Fennecxx' Hyper Engine</h1>
    <p class="text-xl text-gray-300 mb-8">Welcome to the future of gaming</p>
    
    <div class="flex gap-6 justify-center">
      <a href="/games" class="btn btn-lg variant-filled-primary border-2 border-[#1a365d] hover:border-[#2a4365] rounded-xl">
        <span class="material-icons">games</span>
        Games
      </a>
      <a href="/apps" class="btn btn-lg variant-filled-secondary border-2 border-[#1a365d] hover:border-[#2a4365] rounded-xl">
        <span class="material-icons">apps</span>
        Apps
      </a>
      <a href="/settings" class="btn btn-lg variant-filled border-2 border-[#1a365d] hover:border-[#2a4365] rounded-xl">
        <span class="material-icons">settings</span>
        Settings
      </a>
    </div>

    <div class="mt-12 text-sm text-gray-400 space-y-2">
      <p>Created with 💙 by Fennecxx' Crew</p>
      <div class="flex justify-center gap-4">
        <a href="https://github.com/fennecxx" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
          <img src={githubIcon} alt="GitHub" class="w-6 h-6" />
          <span class="sr-only">GitHub</span>
        </a>
        <a href="https://youtube.com/@fennecxx" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
          <img src={youtubeIcon} alt="YouTube" class="w-7 h-7" />
          <span class="sr-only">YouTube</span>
        </a>
      </div>
    </div>
  </div>
</main>

<style>
  :global(body) {
    background-color: var(--primary-dark);
  }
</style>
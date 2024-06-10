<script>
  import Header from "./Header.svelte";

</script>

<main class="px-28 py-10">
  <div class="flex flex-col gap-5">
    <Header />
    <slot />
  </div>
</main>

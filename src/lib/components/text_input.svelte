<script>
  export let placeholder
  export let label = undefined
  export let value =""

</script>

<div>
  {#if label !== undefined}
     <label for="">{label}</label>
  {/if}
  <div 
    class="custom-shadow bg-blue-300 border border-black w-full h-10 rounded-lg mt-1"
  >
    <input 
      type="text"
      class=" black-placeholder h-full w-full bg-transparent px-3 focus:outline-none focus:ring-0" 
      placeholder={placeholder}
      bind:value={value}
    />
  </div>
</div>

<style>
  .black-placeholder::placeholder {
    color: #6A6A6A;
  }
</style>
<!-- FormLabel.svelte -->
<script>
    export let text;
    export let forId;
   </script>
   
   <label for="{forId}" class="form-label">{text}</label>
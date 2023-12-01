<!-- FormInput.svelte -->
<script>
    export let type;
    export let id;
    export let required;
   </script>
   
   <input type="{type}" id="{id}" class="form-control" required="{required}" />
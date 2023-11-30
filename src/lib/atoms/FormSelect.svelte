<!-- FormSelect.svelte -->
<script>
    export let id;
    export let required;
   </script>
   
   <select id="{id}" class="form-select" required="{required}">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
   </select>
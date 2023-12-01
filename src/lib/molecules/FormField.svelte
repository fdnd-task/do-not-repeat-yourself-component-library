<!-- FormFields.svelte -->
<script>
    import { FormLabel, FormInput, FormSelect, ErrorMessages } from '$lib/index.js';
   </script>
   
   <fieldset>
    <FormLabel text="Name:" for="name" />
    <FormInput type="text" id="name" required />
   
    <FormLabel text="Credit Card Number:" for="creditCardNumber" />
    <FormInput type="number" id="creditCardNumber" required />
   
    <FormLabel text="Expiration Date:" for="expirationDate" />
    <FormInput type="date" id="expirationDate" required />
   
    <FormLabel text="CVV:" for="cvv" />
    <FormInput type="number" id="cvv" required />
   </fieldset>
   
   <div class="form-group">
    <FormLabel text="Select an option:" for="option" />
    <FormSelect id="option" required />
   </div>
   
   <div class="form-group">
    <FormLabel text="Donation Amount ($):" for="dollar" />
    <FormInput type="number" id="dollar" required />
   </div>
   
   <ErrorMessages />
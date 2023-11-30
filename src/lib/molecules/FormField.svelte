<!-- FormFields.svelte -->
<script>
    import FormLabel from "$lib/components/atoms/FormLabel.svelte";
    import FormInput from "$lib/components/atoms/FormInput.svelte";
    import FormSelect from "$lib/components/atoms/FormSelect.svelte";
    import ErrorMessages from "$lib/components/molecules/ErrorMessages.svelte";
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
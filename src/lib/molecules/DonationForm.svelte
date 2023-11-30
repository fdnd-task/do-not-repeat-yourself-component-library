<!-- DonationForm.svelte -->
<script>
    import FormTitle from "$lib/components/atoms/FormTitle.svelte";
    import FormFields from "$lib/components/molecules/FormFields.svelte";
    import FormButton from "$lib/components/atoms/FormButton.svelte";
   </script>
   
   <form class="donation-form">
    <FormTitle />
    <FormFields />
    <FormButton />
   </form>
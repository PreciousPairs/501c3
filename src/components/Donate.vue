
<template>
  <section id="donate">
    <h2>Donate</h2>
    <p>Your generous donations allow us to continue our mission and expand our impact.</p>
    <form>
      <label for="donorName">Donor Name:</label>
      <input type="text" id="donorName" name="donorName">
      
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email">
      
      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone">
      
      <label for="amount">Donation Amount:</label>
      <input type="number" id="amount" name="amount" min="1">
      
      <label for="donationType">Donation Type:</label>
      <select id="donationType" name="donationType">
        <option value="oneTime">One-Time</option>
        <option value="monthly">Monthly</option>
      </select>
      
      <label for="paymentMethod">Payment Method:</label>
      <select id="paymentMethod" name="paymentMethod">
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="bankTransfer">Bank Transfer</option>
      </select>
      
      <input type="submit" value="Donate">
    </form>
  </section>
</template>

<script>
export default {
  name: 'Donate',
};
</script>

<style scoped>
/* Your CSS styles here */
</style>
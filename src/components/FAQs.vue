
<template>
  <div class="faqs">
    <h2>Frequently Asked Questions</h2>
    <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
      <h3>{{ faq.question }}</h3>
      <p>{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQs',
  data() {
    return {
      faqs: [{'question': 'What is the mission of Precious Pairs?', 'answer': 'Our mission is to provide shoes to underprivileged and special circumstance children and families nationwide in the USA.'}, {'question': 'How can I donate?', 'answer': 'You can donate through our website using various payment methods, including credit cards, PayPal, and bank transfers.'}, {'question': 'Is my donation tax-deductible?', 'answer': 'Yes, we are a 501(c)(3) organization, and all donations are tax-deductible.'}, {'question': 'How can I volunteer?', 'answer': 'You can sign up to volunteer through our website. We offer various opportunities in shoe distribution, community outreach, and fundraising.'}, {'question': 'What will my donation be used for?', 'answer': 'Donations are primarily used for buying and distributing shoes. A small portion may also be used for administrative costs.'}]
    };
  },
};
</script>

<style scoped>
/* Your CSS styles here */
</style>

</script>

<style scoped>
/* Your CSS styles here */
</style>
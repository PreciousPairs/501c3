
<template>
  <div class="testimonials">
    <h2>Testimonials</h2>
    <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-item">
      <h3>{{ testimonial.name }}</h3>
      <p>{{ testimonial.story }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [{'name': 'Jeff Haskins', 'story': "I was going through a tough time, struggling to make ends meet. I couldn't even afford a new pair of shoes for my job interview. Precious Pairs stepped in and not only provided me with quality footwear but also gave me the confidence to succeed. I nailed the interview and got the job!"}, {'name': 'Emily Smith', 'story': 'When my family and I were hit by a natural disaster, we lost almost everything. Precious Pairs reached out to us and provided new shoes for my children. It might seem like a small gesture, but it gave us hope and reminded us that kindness still exists.'}, {'name': 'Precious Pairs Team', 'story': "We founded Precious Pairs with a simple mission: to help people. Whether it's providing shoes for a child in need or helping communities hit by disasters, we are committed to making a positive impact. We believe in the power of compassion and aim to bring hope and comfort to as many lives as possible."}]
    };
  },
};
</script>

<style scoped>
/* Your CSS styles here */
</style>

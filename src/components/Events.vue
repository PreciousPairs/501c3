
<template>
  <div class="events">
    <h2>Upcoming Events</h2>
    <div v-for="(event, index) in events" :key="index" class="event-item">
      <h3>{{ event.title }}</h3>
      <p><strong>Date:</strong> {{ event.date }}</p>
      <p><strong>Location:</strong> {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      events: [{'title': 'Shoe Distribution Event #1', 'date': 'December 16, 2023', 'description': 'Join us for our 1th shoe distribution event to help underprivileged families. Volunteers and donations are welcome.', 'location': 'Community Center, City, State'}, {'title': 'Shoe Distribution Event #2', 'date': 'January 15, 2024', 'description': 'Join us for our 2th shoe distribution event to help underprivileged families. Volunteers and donations are welcome.', 'location': 'Community Center, City, State'}, {'title': 'Shoe Distribution Event #3', 'date': 'February 14, 2024', 'description': 'Join us for our 3th shoe distribution event to help underprivileged families. Volunteers and donations are welcome.', 'location': 'Community Center, City, State'}, {'title': 'Shoe Distribution Event #4', 'date': 'March 15, 2024', 'description': 'Join us for our 4th shoe distribution event to help underprivileged families. Volunteers and donations are welcome.', 'location': 'Community Center, City, State'}, {'title': 'Shoe Distribution Event #5', 'date': 'April 14, 2024', 'description': 'Join us for our 5th shoe distribution event to help underprivileged families. Volunteers and donations are welcome.', 'location': 'Community Center, City, State'}, {'title': 'Shoe Distribution Event #6', 'date': 'May 14, 2024', 'description': 'Join us for our 6th shoe distribution event to help underprivileged families. Volunteers and donations are welcome.', 'location': 'Community Center, City, State'}]
    };
  },
};
</script>

<style scoped>
/* Your CSS styles here */
</style>
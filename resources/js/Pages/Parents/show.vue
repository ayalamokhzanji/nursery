<template>
  <Head title="company" />
  <h1 class="text-3xl font-bold underline">Company information</h1>

  <div class="card">
    {{ Company.data.name }}
    {{ Company.data.description }}
    {{ Company.data.phone_1 }}
  </div>
</template>
<script>
import DashboardLayout from '../Shared/DashboardLayout';
export default {
  layout: DashboardLayout,
  props: {
    Company: Object,
  },
};
</script>

<template>
  <div>
    <h3>Admin Module</h3>
    <p>Allowed Admin Email: {{ allowedAdminEmail }}</p>
    <p>Allowed Admin Password: {{ allowedAdminPassword }}</p>
  </div>
</template>

<script>
export default {
  props: {
    allowedAdminEmail: {
      type: String,
      required: true
    },
    allowedAdminPassword: {
      type: String,
      required: true
    }
  }
};
</script>
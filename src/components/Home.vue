<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
      <Button @tap="registerForPush" :text="registerText" class="btn btn-primary"/>
    </StackLayout>

  </Page>
</template>


<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      registerText () {
        if (this.$store.state.pushNotifications.registered) return "Unregister for push notifications";
        else return "Register for push notifications"

      },      
    },
    methods: mapActions([
      'registerForPush'
    ]),
  };
</script>

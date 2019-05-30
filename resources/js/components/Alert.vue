<template>
  <div v-show="display">alert</div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      title: "",
      body: "",
      dismissed: false
    };
  },

  mounted() {
    this.$http
      .get(
        "https://api.github.com/search/issues?q=repo:sams-joseph/gerbzilla+type:pr+label:release&order=desc&page=1&per_page=1",
        { headers: { authorization: null } }
      )
      .then(data => {
        console.log(data);
        this.title = data.data.items[0].title;
        this.body = data.data.items[0].body;
        this.number = data.data.items[0].number;
      })
      .catch(err => {});
  },

  methods: {
    onClick() {
      if (localStorage) {
        localStorage.setItem("dismiss", this.number);
      }
      this.dismissed = true;
    }
  },

  computed: {
    display() {
      return (
        localStorage &&
        !this.dismissed &&
        Number(localStorage.getItem("dismiss")) < this.number
      );
    }
  }
};
</script>

<template>
  <div v-if="!!expiring.length">
    <div class="bg-blue text-center py-4 lg:px-4">
      <router-link to="/t/users">
        <div
          class="p-2 bg-blue-light items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span
            class="flex rounded-full bg-blue-lighter uppercase px-1 py-1 text-xs font-bold mr-3 text-white"
          >
            <svg
              class="fill-current w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
              ></path>
            </svg>
          </span>
          <span
            class="font-semibold mr-2 text-left flex-auto text-white"
          >Some users need your attention.</span>
          <svg
            class="fill-current text-white opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            ></path>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expiring: []
    };
  },

  mounted() {
    this.$http
      .get(`${process.env.MIX_BASE_URL}/trainer/expiring`)
      .then(res => {
        this.expiring = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

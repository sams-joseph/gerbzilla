<template>
  <div class="px-4 max-w-lg">
    <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">{{ heading }}</h1>
    <ul class="list-reset">
      <li
        class="w-full py-4 hover:bg-grey-lighter rounded-lg px-4 flex items-center"
        v-for="object in data"
        v-bind:key="object.id"
      >
        <span class="rounded-full mr-6">
          <svg
            class="fill-current text-green"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.75 0.75C9.908 0.75 0.75 9.908 0.75 20.75C0.75 31.592 9.908 40.75 20.75 40.75C31.592 40.75 40.75 31.592 40.75 20.75C40.75 9.908 31.592 0.75 20.75 0.75ZM20.75 36.75C16.448 36.75 12.48 34.946 9.57 32.07C11.076 28.456 14.6 25.894 18.75 25.894H22.75C26.9 25.894 30.424 28.456 31.93 32.07C29.02 34.946 25.052 36.75 20.75 36.75ZM20.75 10.75C24.204 10.75 26.75 13.294 26.75 16.75C26.75 20.206 24.204 22.75 20.75 22.75C17.298 22.75 14.75 20.206 14.75 16.75C14.75 13.294 17.298 10.75 20.75 10.75Z"
            ></path>
          </svg>
        </span>
        <span class="text-grey-darkest mr-6">{{ `${object.name}` }}</span>
        <span class="flex-1"></span>
        <span class="h-10 w-10 rounded-full bg-grey-light flex items-center justify-center">
          <svg
            class="fill-current text-grey-darkest"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
            ></path>
            <path
              d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"
            ></path>
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    heading: String
  }
};
</script>
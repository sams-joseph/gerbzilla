<template>
  <div
    class="absolute pin-t pin-l bg-grey-lightest h-screen w-full flex items-start justify-center pt-32"
  >
    <div class="bg-white max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div class="sm:flex sm:items-center p-8">
        <div class="text-center sm:text-left sm:flex-grow">
          <p class="text-xl text-center text-grey-darkest mb-8">Welcome Back!</p>
          <div>
            <input
              class="appearance-none border-b w-full py-2 mb-8 text-grey-darker leading-tight focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
            >
            <input
              class="appearance-none border-b w-full py-2 mb-12 text-grey-darker leading-tight focus:outline-none"
              id="password"
              type="password"
              placeholder="Password"
            >
            <button
              class="text-xs font-semibold rounded-full py-2 leading-normal bg-white border border-red text-red hover:bg-red hover:text-white w-full uppercase"
            >Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

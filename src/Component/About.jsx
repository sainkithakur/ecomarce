import React from 'react'

const About = () => {
  return (
    <div>
      <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-black lg:text-4xl">About</h1>
            <p class="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                obcaecati illum mollitia.</p>
            <button class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                Start 14-Day free trial
            </button>
            <p class="mt-3 text-sm text-gray-400 ">No credit card required</p>
        </div>

        <div class="flex justify-center mt-10">
            <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
        </div>
    </div>
    </div>
  )
}

export default About

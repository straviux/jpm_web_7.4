<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown lg:hidden">
        <label tabindex="0" class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64 text-sm"
        >
          <li>
            <a href="/"><mdicon name="home" class="text-gray-500" />Home</a>
          </li>
          <li tabindex="0">
            <span>
              <mdicon name="charity" class="text-gray-500" />
              Financial Assistance</span
            >
            <ul class="p-2 bg-base-100 shadow">
              <li>
                <a :href="'/financial-assistance/overview'">Overview</a>
              </li>
              <li><a>Resolutions</a></li>
              <li>
                <a :href="'/financial-assistance/requirement'">Requirements</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <span>
              <mdicon name="account-school" class="text-gray-500" />
              Scholarship</span
            >
            <ul class="p-2 bg-base-100 shadow">
              <li>
                <a :href="'/scholarship-program/overview'">Overview</a>
              </li>
              <li><a>Resolutions</a></li>
              <li>
                <a :href="'/scholarship-program/requirement'">Requirements</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <span>
              <mdicon name="crowd" class="text-gray-500" />
              Livelihood</span
            >
            <ul class="p-2 bg-base-100 shadow">
              <li><a>Overview</a></li>
              <li><a>Resolutions</a></li>
              <li><a>Requirements</a></li>
            </ul>
          </li>

          <li class="flex">
            <router-link :to="{ name: 'NewsModule' }"
              ><mdicon
                name="newspaper-variant-outline"
                class="text-gray-500"
              />News</router-link
            >
          </li>
          <li class="flex">
            <router-link :to="{ name: 'StoryModule' }"
              ><mdicon
                name="tooltip-text"
                class="text-gray-500"
              />Stories</router-link
            >
          </li>
          <li class="flex">
            <router-link :to="{ name: 'GalleryModule' }"
              ><mdicon
                name="camera-iris"
                class="text-gray-500"
              />Gallery</router-link
            >
          </li>
          <li class="flex">
            <a
              ><mdicon
                name="frequently-asked-questions"
                class="text-gray-500"
              />FAQ</a
            >
          </li>

          <li tabindex="0">
            <router-link :to="{ name: 'GovernmentAgencies' }">
              <mdicon name="account-supervisor-circle" class="text-gray-500" />
              Government Agencies</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'About' }">
              <mdicon name="information" class="text-gray-500" />
              About</router-link
            >
          </li>
          <li>
            <span>
              <mdicon name="phone" class="text-gray-500" />
              Contact Us</span
            >
          </li>
        </ul>
      </div>
      <a class="normal-case text-xl"
        ><div class="hidden lg:flex justify-start lg:w-0 lg:flex-1">
          <a href="/" class="z-10">
            <span class="sr-only">JPM</span>
            <img
              class="h-24 w-auto ml-20 shadow-xl rounded-full"
              src="../assets/img/jpm-icon-logo.png"
              alt=""
            />
          </a>

          <a href="/" class="mt-4 -ml-20 z-0 hidden xl:block">
            <span class="sr-only">Congress</span>
            <img class="h-[78px] w-auto" src="../assets/img/title.gif" alt="" />
          </a></div
      ></a>
    </div>
    <div class="navbar-center flex lg:hidden z-20">
      <a href="/" class="z-10">
        <span class="sr-only">JPM</span>
        <img
          class="h-16 w-auto shadow-xl rounded-full"
          src="../assets/img/jpm-icon-logo.png"
          alt=""
        />
      </a>
    </div>
    <div class="navbar-center hidden lg:flex z-20">
      <ul class="menu menu-horizontal p-0">
        <li tabindex="0">
          <a>
            JPM Assistance
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-white">
            <li>
              <ul class="menu p-2">
                <li tabindex="0">
                  <span>
                    <mdicon name="charity" class="text-gray-500" />
                    Financial Assistance</span
                  >
                  <ul class="p-2 bg-base-100 shadow">
                    <li>
                      <a :href="'/financial-assistance/overview'">Overview</a>
                    </li>
                    <li><a>Resolutions</a></li>
                    <li>
                      <a :href="'/financial-assistance/requirement'"
                        >Requirements</a
                      >
                    </li>
                  </ul>
                </li>
                <li tabindex="0">
                  <span>
                    <mdicon name="account-school" class="text-gray-500" />
                    Scholarship</span
                  >
                  <ul class="p-2 bg-base-100 shadow">
                    <li>
                      <a :href="'/scholarship-program/overview'">Overview</a>
                    </li>
                    <li><a>Resolutions</a></li>
                    <li>
                      <a :href="'/scholarship-program/requirement'"
                        >Requirements</a
                      >
                    </li>
                  </ul>
                </li>
                <li tabindex="0">
                  <span>
                    <mdicon name="crowd" class="text-gray-500" />
                    Livelihood</span
                  >
                  <ul class="p-2 bg-base-100 shadow">
                    <li><a>Overview</a></li>
                    <li><a>Resolutions</a></li>
                    <li><a>Requirements</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="/">Home</a></li>
        <li><router-link :to="{ name: 'NewsModule' }">News</router-link></li>
        <li>
          <router-link :to="{ name: 'StoryModule' }">Stories</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'GalleryModule' }">Gallery</router-link>
        </li>
        <li><a href="">FAQ</a></li>
        <li tabindex="0">
          <a>
            More
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-white">
            <li>
              <ul class="menu p-2">
                <li tabindex="0">
                  <router-link :to="{ name: 'GovernmentAgencies' }">
                    <mdicon
                      name="account-supervisor-circle"
                      class="text-gray-500"
                    />
                    Government Agencies</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'About' }">
                    <mdicon name="information" class="text-gray-500" />
                    About</router-link
                  >
                </li>
                <li>
                  <span>
                    <mdicon name="phone" class="text-gray-500" />
                    Contact Us</span
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <!-- <a class="btn">Get started</a> -->
      <div class="hidden lg:flex justify-start lg:w-0 lg:flex-1 gap-2">
        <a href="/" class="z-10">
          <span class="sr-only">JPM</span>
          <img
            class="h-20 w-auto mt-2"
            src="../assets/img/jpm_logo_colored.png"
            alt=""
          />
        </a>
        <a href="/" class="z-10">
          <span class="sr-only">Province</span>
          <img
            class="h-20 w-auto mt-2"
            src="../assets/img/province_logo_colored.gif"
            alt=""
          />
        </a>
        <a href="/" class="mt-2 z-10">
          <span class="sr-only">Congress</span>
          <img
            class="h-20 w-auto"
            src="../assets/img/logo_colored.gif"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>

  <router-view></router-view>
  <footer class="p-4 md:px-6 md:py-8">
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="#" class="flex items-center mb-4 sm:mb-0">
        <img
          src="../assets/img/logo_colored.gif"
          class="mr-3 h-24"
          alt="House of Representative Logo"
        />
        <img
          src="../assets/img/province_logo_colored.gif"
          class="mr-3 h-24"
          alt="House of Representative Logo"
        />
        <img
          src="../assets/img/jpm-icon-logo.png"
          class="mr-3 h-24"
          alt="JPM Web Logo"
        />
        <img
          src="../assets/img/jpm_logo_colored.png"
          class="mr-3 h-24"
          alt="JPM Web Logo"
        />
      </a>
      <ul
        class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
      >
        <li>
          <a href="/about" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </div>

    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 2022 <a href="#" class="hover:underline">JPM Palawan</a>. All Rights
      Reserved.
    </span>
  </footer>
</template>

<script></script>

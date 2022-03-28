
<template>
  <Disclosure as="nav" class="bg-gray-800 fixed w-full z-30" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden  ">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <!-- Right content of your nav bar element like logo, service  -->
        <!-- <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        > -->
          <!-- Image or logo of your web site -->
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="../assets/eoffice.png"
              alt="E-Office"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="../assets/eoffice.png"
              alt="E-Office"
            />
          </div>

          <Popover class="relative " v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <span class="px-4 py-1">Service</span>     
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>
            <!-- set translition animition to items in solution -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="
                  absolute
                  z-10
                  -ml-4
                  mt-3
                  transform
                  px-2
                  w-screen
                  max-w-md
                  sm:px-0
                  lg:ml-0 lg:left-1/2 lg:-translate-x-1/2
                "
              >
                <div
                  class="
                    rounded-lg
                    shadow-lg
                    ring-1 ring-black ring-opacity-5
                    overflow-hidden
                  "
                >
                  <div
                    class="
                      relative
                      grid
                      gap-6
                      bg-white
                      px-5
                      py-6
                      sm:gap-8 sm:p-8
                    "
                  >
                    <router-link
                      v-for="item in service"
                      :key="item.name"
                      :to="item.href"
                      class="
                        -m-3
                        p-3
                        flex
                        items-start
                        rounded-lg
                        hover:bg-gray-50
                      "
                    >
                      <!-- <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      /> -->
                      <!-- <div v-html="item.icon"  class="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true" ></div> -->
                        <!-- <h1 v-html="item.icon"></h1> -->
                        <fa  class=" flex-shrink-0 h-6 w-6 text-indigo-600" :icon="item.icon"/>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </router-link>
                  </div>
                  <div
                    class="
                      px-5
                      py-5
                      bg-gray-50
                      space-y-6
                      sm:flex sm:space-y-0 sm:space-x-10 sm:px-8
                    "
                  >
                    <div
                      v-for="item in callsToAction"
                      :key="item.name"
                      class="flow-root"
                    >
                      <router-link
                        :to="item.href"
                        class="
                          -m-3
                          p-3
                          flex
                          items-center
                          rounded-md
                          text-base
                          font-medium
                          text-gray-900
                          hover:bg-gray-100
                        "
                      >
                        <component
                          :is="item.icon"
                          class="flex-shrink-0 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="ml-3">{{ item.name }}</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</router-link
              >
            </div>
          </div>
        <!-- </div> -->
        <!-- Notification -->
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <button
            type="button"
            class="
              bg-gray-800
              p-1
              rounded-full
              text-gray-400
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-800
              focus:ring-white
            "
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="
                  bg-gray-800
                  flex
                  text-sm
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-800
                  focus:ring-white
                "
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="../assets/G6.JPG"
                  alt=""
                />
              </MenuButton>
            </div>

            <!-- src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" -->

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-48
                  rounded-md
                  shadow-lg
                  py-1
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon, QuestionMarkCircleIcon,PaperAirplaneIcon } from "@heroicons/vue/solid";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";


const service = [
  {
    name: "Customer service request form",
    description:
      "A perfect way to request service from buisness for customer .",
    href: "/customer-form",
    icon: 'question',
  },
  {
    name: "eLeave",
    description: "electronic leave form to apply online.",
    href: "/leave-form",
    icon: 'paper-plane',
  },
  {
    name: "eTour",
    description: "electronic tour form to apply for an employee tour program.",
    href: "/tour-form",
    icon: 'plane',
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "https://www.statusin.in/10356.html", icon: PlayIcon },
  { name: "Contact ", href: "#", icon: PhoneIcon },
];

const navigation = [
  { name: "Dashboard", href: "/subscribe", current: true },
  { name: "Service Form", href: "/customer-form", current: false },
  { name: "Leave Form", href: "/leave-form", current: false },
  { name: "Tour Form", href: "/tour-form", current: false },
  { name: "Calendar", href: "/", current: false },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,

    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      navigation,
      service,
      callsToAction,
    };
  },
};
</script>








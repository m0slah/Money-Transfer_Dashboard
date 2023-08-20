<template>
  <div class="flex min-h-screen w-full bg-gray-700 font-sans">
    <!-- aside content area -->
    <aside class="flex w-64 flex-col px-4 pt-10 pb-6">
      <a
        href="#"
        class="flex items-center gap-x-4 px-8 text-2xl font-medium text-white focus:outline-none"
      >
        <img
          :src="dashboardIcon"
          alt="dashboardIcon"
          class="h-6 w-6 stroke-current"
        />
        <span> Transfer</span>
      </a>
      <ul class="flex flex-1 flex-col gap-y-10 px-8 pt-14 pb-6">
        <li v-for="item in menu">
          <a
            href="#"
            class="flex items-center gap-x-4 text-gray-400 hover:font-medium hover:text-white focus:font-medium focus:text-white focus:outline-none"
          >
            <img :src="item.icon" class="h-6 w-6 stroke-current" />
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
      <div
        class="rounded-10 bg-gray-900 p-6 bg-[url('../public/img/line-pattern.svg')] bg-top"
      >
        <div class="text-white">
          Refer a friend and get <span class="font-bold">$5</span>
        </div>
        <div class="mt-3 text-sm text-gray-400">The reward of transfer.</div>
        <button
          class="mt-4 w-full rounded-lg bg-gray-700 py-2 text-sm font-normal text-gray-400 hover:text-white"
        >
          Invite
        </button>
      </div>
    </aside>

    <!-- main content area-->
    <main
      class="flex min-h-screen flex-1 flex-col rounded-l-[48px] bg-gray-800 p-8"
    >
      <nav class="flex items-center gap-x-6">
        <div class="flex w-3/5 items-center justify-between">
          <h1 class="text-[30px] font-bold text-white">Overview</h1>
          <div class="flex items-center gap-x-2">
            <div class="relative">
              <span
                class="pointer-events-none absolute inset-y-0 flex items-center px-3"
              >
                <img
                  src="./assets/icons/search.svg"
                  class="h-6 w-6 stroke-current text-gray-400"
                />
              </span>
              <input
                type="text"
                placeholder="Search"
                class="rounded-10 bg-gray-900 py-3 pr-4 pl-10 text-sm text-gray-400 focus:text-white focus:outline-none"
              />
            </div>
            <button
              class="rounded-10 bg-gray-900 py-3 px-4 text-sm text-gray-400 hover:text-white"
            >
              Add Account
            </button>
          </div>
        </div>
        <div class="flex w-2/5 items-center justify-between">
          <div class="flex items-center gap-x-2.5">
            <button
              class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:text-white"
            >
              <img
                src="./assets/icons/mail.svg"
                class="h-7 w-7 stroke-current"
              />
            </button>
            <button
              class="relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:text-white"
            >
              <img
                src="./assets/icons/bell.svg"
                class="h-7 w-7 stroke-current"
              />
              <div class="absolute top-3 right-3 flex h-2 w-2">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"
                />
                <span class="inline-flex h-2 w-2 rounded-full bg-indigo-400" />
              </div>
            </button>
            <button
              class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:text-white"
            >
              <img
                src="./assets/icons/inbox.svg"
                class="h-7 w-7 stroke-current"
              />
            </button>
          </div>
          <button
            class="flex h-11 items-center justify-center rounded-full bg-gray-900 px-2 text-gray-400 hover:text-white"
          >
            <img
              src="../public/img/moslah.jpg"
              alt=""
              class="h-8 w-8 rounded-full object-cover"
            />
            <span class="pl-2 text-sm">MO Slah</span>
            <ChevronDownIcon class="h-6 w-6 stroke-current" />
          </button>
        </div>
      </nav>
    </main>
  </div>
</template>

<script>
import HomeIcon from "@/assets/icons/home.svg"; // Update the path to your SVG icon files
import BillIcon from "@/assets/icons/bill.svg"; // Update the path to your SVG icon files
import InvoiceIcon from "@/assets/icons/invoice.svg"; // Update the path to your SVG icon files
import BuildingIcon from "@/assets/icons/building.svg"; // Update the path to your SVG icon files
import CardIcon from "@/assets/icons/card.svg"; // Update the path to your SVG icon files
import SettingsIcon from "@/assets/icons/settings.svg"; // Update the path to your SVG icon files
import DashboardIcon from "@/assets/icons/dashboard.svg";

export default {
  name: "App",
  data() {
    return {
      menu: [
        { name: "Home", icon: HomeIcon },
        { name: "USA Payors", icon: BillIcon },
        { name: "Invoices", icon: InvoiceIcon },
        { name: "My Banks", icon: BuildingIcon },
        { name: "Withdraw", icon: CardIcon },
        { name: "Settings", icon: SettingsIcon },
      ],
      dashboardIcon: [DashboardIcon],
    };
  },
};
</script>

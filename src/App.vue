<template>
  <div class="flex min-h-screen w-full bg-gray-700 font-sans">
    <aside class="flex w-64 flex-col px-4 pt-10 pb-6">
      <a
        href="#"
        class="flex items-center gap-x-4 px-8 text-2xl font-medium text-white focus:outline-none"
      >
        <img
          :src="DashboardIcon"
          alt="dashboardIcon"
          class="h-6 w-6 stroke-current"
        />
        <span>Transfer</span>
      </a>
      <ul class="flex flex-1 flex-col gap-y-10 px-8 pt-14">
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
    </aside>
  </div>
</template>

<script setup>
import HomeIcon from "./assets/icons/home.svg";
import BillIcon from "./assets/icons/bill.svg";
import InvoiceIcon from "./assets/icons/invoice.svg";
import BuildingIcon from "./assets/icons/building.svg";
import CardIcon from "./assets/icons/card.svg";
import SettingsIcon from "./assets/icons/settings.svg";

import DashboardIcon from "./assets/icons/dashboard.svg";

const menu = [
  { name: "Home", icon: HomeIcon },
  { name: "USA Payors", icon: BillIcon },
  { name: "Invoices", icon: InvoiceIcon },
  { name: "My Banks", icon: BuildingIcon },
  { name: "Withdraw", icon: CardIcon },
  { name: "Settings", icon: SettingsIcon },
];
</script>

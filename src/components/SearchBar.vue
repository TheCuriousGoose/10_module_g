<template>
  <form class="flex flex-col md:flex-row gap-3 mx-auto">
    <div class="flex flex-1">
      <input type="text" placeholder="Search for restaurants you like"
        class="w-full md:w-80 px-3 h-10 rounded-l border-2 border-slate-500 focus:outline-none focus:border-slate-500 flex-1" />
      <button type="submit" class="bg-slate-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">
        Search
      </button>
    </div>
    <select id="pricingType" name="pricingType"
      class="w-120 h-10 border-2 border-slate-500 focus:outline-none focus:border-slate-500 text-slate-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
      <option value="All" selected>
        All
      </option>
      <option value="Freemium">Freemium</option>
      <option value="Free">Free</option>
      <option value="Paid">Paid</option>
    </select>
  </form>
</template>

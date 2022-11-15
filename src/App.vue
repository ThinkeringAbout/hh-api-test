<template>
  <nav class="h-20 sticky top-0 z-50 w-full bg-[#003049] text-[#669bbc] flex justify-start items-center px-2 gap-4">
    <RouterLink to="/createUser" class="text-lg font-mono font-bold">Создать</RouterLink>
    <RouterLink to="/updateUser" class="text-lg font-mono font-bold">Редактировать</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>
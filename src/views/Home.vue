<script setup>
import { ref } from "vue";
import MdiGithub from "~icons/mdi/github";
import MdiInstagram from "~icons/mdi/instagram";
import MdiDiscord from "~icons/mdi/discord"
import Typing from "@components/Typing.vue";

const step = ref(0);
</script>
<template>
    <div class="w-full overflow-y-auto px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24">
        <Typing
            v-if="step >= 0"
            @done="step++"
            text="胖子的個人網頁"
            class="mb-2 block text-2xl sm:text-3xl lg:text-4xl"
        />
        <Typing v-if="step >= 1" @done="step++" text="關於我:一個胖子" :speed="60" />
        <a
            v-if="step >= 2"
            class="mt-8 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://github.com/chiu20060726"
            target="_blank"
        >
            <MdiGithub class="mr-1 inline-block" />
            <Typing v-if="step >= 2" @done="step++" text="GitHub" :speed="60" />
        </a>
        <a
            v-if="step >= 3"
            @done="step++"
            class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://instagram.com/"
            target="_blank"
        >
            <MdiInstagram class="mr-1 inline-block" />
            <Typing v-if="step >= 3" @done="step++" text="Instagram" :speed="60" />
        </a>
        <a
            v-if="step >= 4"
            @done="step++"
            class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://discord.com/"
            target="_blank"
        >
            <MdiDiscord class="mr-1 inline-block" />
            <Typing v-if="step >= 3" @done="step++" text="Discord" :speed="60" />
        </a>
    </div>
</template>

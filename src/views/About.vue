<script setup>
import { ref } from "vue";
import Typing from "@components/Typing.vue";

const step = ref(0);
</script>

<template>
    <div class="h-full w-full px-8 pt-8 sm:px-12 sm:pt-12 lg:px-16 lg:pt-16">
        <Typing
            v-if="step >= 0"
            @done="step++"
            text="關於我們"
            class="mb-8 block text-2xl sm:text-3xl lg:text-4xl"
        />

        <Typing v-if="step >= 1" @done="step++" text="大家好，我們是中正資研" />
        <br>
        <Typing v-if="step >= 2" @done="step++" text="一個喜歡資訊的社團(?" />
        <br><br>
        <Typing
            v-if="step >= 0"
            @done="step++"
            text="會的語言"
            class="mb-8 block text-2xl sm:text-3xl lg:text-4xl"
        />
        <Typing v-if="step >= 1" @done="step++" text="中文 ENGLISH HTML CSS JS(jquery) php C++ python" />
        <br><br>
        <Typing
            v-if="step >= 0"
            @done="step++"
            text="預計教"
            class="mb-8 block text-2xl sm:text-3xl lg:text-4xl"
        />
        <Typing v-if="step >= 1" @done="step++" text="Github使用、基本前端網頁、APCS程式(C++ python)" />
        <br>
        <Typing v-if="step >= 1" @done="step++" text="當然，如果有其他想學的，也可私訊教學，我們也會盡力提供協助" />

    </div>
</template>

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
            text="關於我"
            class="mb-8 block text-2xl sm:text-3xl lg:text-4xl"
        />

        <Typing v-if="step >= 1" @done="step++" text="邱靖舜，一個喜歡看動漫跟VTB的死胖子" />
        <br>
        <Typing v-if="step >= 2" @done="step++" text="美術極差(這地方應該看得出來)" />
        <br><br>
        <Typing
            v-if="step >= 0"
            @done="step++"
            text="會的語言"
            class="mb-8 block text-2xl sm:text-3xl lg:text-4xl"
        />
        <Typing v-if="step >= 1" @done="step++" text="中文 ENGLISH HTML CSS JS(jquery) php C++ C# python" />
        <br><br>
        <Typing
            v-if="step >= 0"
            @done="step++"
            text="推的VTB"
            class="mb-8 block text-2xl sm:text-3xl lg:text-4xl"
        />
        <Typing v-if="step >= 1" @done="step++" text="我是一個DD，所以幾乎所有都推，全都我婆(誤" />
        <br>
        <Typing v-if="step >= 1" @done="step++" text="硬要說的話，主推HOLOLIVE EN Mori Calliope" />

    </div>
</template>

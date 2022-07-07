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
            text="幹部經歷"
            class="mb-8 block text-2xl sm:text-3xl lg:text-4xl"
        />

        <Typing v-if="step >= 1" @done="step++" text="高一上/下:資訊股長" />
        <br>
        <Typing v-if="step >= 2" @done="step++" text="(社團)高一上:公關" />
        <br>
        <Typing v-if="step >= 2" @done="step++" text="(社團)高一下:教學" />
        <br>
        <Typing v-if="step >= 2" @done="step++" text="(社團)高二上/下:副社長" />
        <br><br>
        <Typing
            v-if="step >= 0"
            @done="step++"
            text="虛擬世界"
            class="mb-8 block text-2xl sm:text-3xl lg:text-4xl"
        />
        <Typing v-if="step >= 1" @done="step++" text="Minecraft server: 爆炸公會WD分會 會長" />
        
    </div>
</template>

<template>
    <div class="md:grid md:grid-cols-[20%_80%] gap-3">
        <div>
            <h2 class="font-medium text-xl relative text-[#69b6d5] mb-8 md:mb-0">
                <slot name="title" />

                <span class="absolute left-0 -bottom-3 h-[2px] w-10 bg-[#69b6d5]"></span>
            </h2>
        </div>

        <slot />
    </div>
</template>

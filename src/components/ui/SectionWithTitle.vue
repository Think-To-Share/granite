<template>
    <div class="grid grid-cols-[20%_80%] gap-3">
        <div>
            <h2 class="font-medium text-xl relative text-primary-500">
                <slot name="title" />

                <span class="absolute left-0 -bottom-3 h-[2px] w-10 bg-primary-600"></span>
            </h2>
        </div>

        <slot />
    </div>
</template>

<template>
    <div>
        <form>
            <div class="mb-3">
                <label class="w-full block text-gray-600 font-medium">Name</label>
                <Input name="name" class="w-full" />
            </div>

            <div class="mb-3">
                <label class="w-full block text-gray-600 font-medium">Email</label>
                <Input type="email" name="email" class="w-full" />
            </div>

            <div class="mb-3">
                <label class="w-full block text-gray-600 font-medium">Subject</label>
                <Input name="subject" class="w-full" />
            </div>

            <div class="mb-3">
                <label class="w-full block text-gray-600 font-medium">Message</label>
                <textarea class="w-full border-gray-300 text-gray-600 placeholder:text-gray-400 rounded-lg shadow-sm transition-colors duration-100 ease-in"></textarea>    
            </div>

            <div class="mb-3">
                <label class="w-full block text-gray-600 font-medium">Attachment</label>
                <input type="file" name="file" class="block mt-2 w-full text-sm text-slate-500 border border-gray-600 p-2 bg-white" />
            </div>
            
            <button
                    type="submit"
                    class="mt-5 outline-none bg-blue-500 text-white px-5 py-3 font-medium rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-500/25 transition-all duration-150 ease-in-out"
                >
                    Submit
                </button>
        </form>
    </div>
  
</template>

<script>
import Input from '@/components/ui/forms/Input.vue';
export default {
    components: { Input }
}
</script>

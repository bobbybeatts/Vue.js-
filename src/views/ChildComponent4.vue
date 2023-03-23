<template>
    <div></div>
</template>
    <script>
    export default {
        data() {
             return {
                msg:'자식 컴포넌트로부터 보내는 메시지'
             };
        },
        mounted(){
            this.$emit('send-message', this.msg)
        }
    };
    </script>

<div class="container">
    <header>
    <!-- header 컨텐츠 -->
    </header>
    <main>
    <!-- main 컨텐츠 -->
    </main>
    <footer>
    <!-- footer 컨텐츠 -->
    </footer>
</div>
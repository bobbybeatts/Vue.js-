<template>
<button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
<child-component ref="child_component" />
</template>
<script>
import ChildComponent from './ChildComponent5.vue';
import mixins from '@/mixins';
export default {
    components: {ChildComponent},
    computed:{
        msg(){
            return this.$refs.child_component.msg;
        }
    },
    methods: {
        checkChild(){
            alert(this.msg);
        }
    },
    mixins:[mixins],
    mounted(){
        console.log('컴포넌트 mounted');
        //믹스인 mounted
        //컴포넌트 mounted
    },
    unmounted(){
        console.log('컴포넌트 unmounted');
        //믹스인 unmounted
        //컴포넌트 unmounted
    }
};
</script>
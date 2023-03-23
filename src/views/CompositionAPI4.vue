<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="num1" @keyup="plusNumbers" />
            <span> + </span>
            <input type="text" v-model="num2" @keyup="plusNumbers" />
            <span> = </span>
            <span>{{result}}</span>
        </div>
    </div>
</template>
<script>
import {plusCalculator} from '../common.js'; //toRefs 추가
export default {
        name: 'calculator-composition4', 
    setup(){
        let {num1,num2,result} = plusCalculator(); //외부 function
        return {
            num1,num2, result
        }
    }
};
</script>


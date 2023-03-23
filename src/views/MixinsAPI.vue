<script>
import ApiMixin from '../api';
export default {
    mixins: [ApiMixin], //사용할 믹스인 파일을 배열로 등록
    data() {
         return {
            productList: []
         };
    },
    async mounted(){
        this.productList=await this.$callAPI("https://dd1e3c46-53ca-4e33-b678-3c10a0031ea5.mock.pstmn.io/list","get");
        console.log(this.productList);
    } 
};
</script>
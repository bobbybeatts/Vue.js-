<modal-layout>
    <template v-slot:header>
        <h1>팝업 타이틀</h1>
    </template>
    <template v-slot:default>
        <p>팝업 컨텐츠 1</p>
        <p>팝업 컨텐츠 2</p>
    </template>
    <template v-slot:footer>
        <button type="button">닫기</button>
    </template>
</modal-layout>


<div class="modal-container">
    <header>
        <h1>팝업 타이틀</h1>
    </header>
    <main>
        <p>팝업 컨텐츠 1</p>
        <p>팝업 컨텐츠 2</p>
    </main>
    <footer>
        <button type="button">닫기</button>
    </footer>
</div>


<template>
    <h2>{{title}}</h2>
</template>
<script>
export default {
    props: {
        title:{
            type:String,
            default: "페이지 제목입니다. "
        }
    }
}
</script>

<template>
    <h2><slot></slot></h2>
</template>
<PageTitle>컴포넌트 사용 예제 페이지</PageTitle>


<modal-layout>
    <template #header>
        <h1>팝업 타이틀</h1>
    </template>
    <template #default>
        <p>팝업 컨텐츠 1</p>
        <p>팝업 컨텐츠 2</p>
    </template>

    <template #footer>
        <button type="button">닫기</button>
    </template>
</modal-layout>
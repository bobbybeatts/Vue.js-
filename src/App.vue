<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">DataBinding</router-link> |
    <router-link to="/databindinghtml">DataBindingHTML</router-link> |
    <router-link to="/databindinginputtext">DataBindingHInputText</router-link>
    |
    <router-link to="/DataBindingInputNumber"
      >DataBindingInputNumber</router-link
    >
    |
    <router-link to="/databindingtextarea">DataBindingTextarea</router-link> |
    <router-link to="/databindingselect">DataBindingSelect</router-link> |
    <router-link to="/databindingcheckbox">DataBindingCheckbox</router-link> |
    <router-link to="/databindingcheckbox2">DataBindingCheckbox2</router-link> |
    <router-link to="/databindingradio">DataBindingRadio</router-link> |
    <router-link to="/databindingattribute">DataBindingAttribute</router-link> |
    <router-link to="/databindingbutton">DataBindingButton</router-link> |
    <router-link to="/databindingclass">DataBindingClass</router-link> |
    <router-link to="/databindingclass2">DataBindingClass2</router-link> |
    <router-link to="/databindingstyle">DataBindingStyle</router-link> |
    <router-link to="/databindingstyle2">DataBindingStyle2</router-link> |
    <router-link to="/databindinglist">DataBindingList</router-link> |
    <router-link to="/eventclick">EventClick</router-link> |
    <router-link to="/eventchange">EventChange</router-link> |
    <router-link to="/computedname">ComputedName</router-link> |
    <router-link to="/watchname">WatchName</router-link> |
    <router-link to="/watchname2">WatchName2</router-link> |
    <router-link to="/databindinglist2">DataBindingList2</router-link> |
    <router-link to="/nestedcomponent">NestedComponent</router-link> |
    <router-link to="/parentcomponent">ParentComponent</router-link> |
    <router-link to="/parentcomponent2">ParentComponent2</router-link> |
    <router-link to="/parentcomponent3">ParentComponent3</router-link> |
    <router-link to="/parentcomponent4">ParentComponent4</router-link> |
    <router-link to="/parentcomponent5">ParentComponent5</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/compositionapi">CompositionAPI</router-link> |
    <router-link to="/compositionapi2">CompositionAPI2</router-link> |
    <router-link to="/compositionapi3">CompositionAPI3</router-link> |
    <router-link to="/compositionapi4">CompositionAPI4</router-link> |
    <router-link to="/compositionapiprovide">compositionapiprovide</router-link> |
    <router-link to="/mixinsapi">MixinsAPI</router-link> |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

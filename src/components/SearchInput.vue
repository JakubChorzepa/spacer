<template>
    <div class="searchInputWrapper">
        <div class="search">
            <input
             name="search"
             id="search"
             v-model=searchValue
             @input=handleInput
             />
        </div>
    </div>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>

<style lang="scss" scoped>
    .searchInputWrapper{
        margin-top: 50px;
        width: 250px;
        display: flex;
        flex-direction: column;
        input{
            background: none;
            width: 100%;
            height: 30px;
            border: none;
            border-bottom: 1px solid gray;
        }
    }
</style>

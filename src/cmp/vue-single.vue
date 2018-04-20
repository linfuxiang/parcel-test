<template>
    <div>
        <div>Vue单文件组件</div>
        <div>
            <p>inner</p>
        </div>
        <a href="/index.html">跳转到index</a>
        <a href="/vue.html">跳转到Vue实例</a>
        <div v-cloak>{{ name }}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'LFXxxxx',
            }
        },
    };
</script>

<style lang="scss" scoped>
    div {
        color: red;
        transform: translate(0);
        p {
            font-size: 99px;
        }
    }

    [v-cloak] {
        display: none;
    }
</style>
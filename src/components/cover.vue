<template>
<div id="cover" v-if="open">
    <div class="mask" @click.stop.self.prevent="hide()">
        <slot></slot>
    </div>
    </div>
</div>
</template>

<script>
    export default{
        data: function () {
            return {
                open:false,
            }
        },
        methods: {
            show (){
                document.body.style.overflow = 'hidden';
                this.open = true;
            },
            hide (){
                this.open = false;
                document.body.style.overflow = 'visible';
            }
        },
        mounted (){
        }
    }
</script>
<style lang="less">
    #cover{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        .mask{
            width: 100%;
            height: 100%;
            padding: 0.3rem;
            background-color: rgba(3,3,3,0.3);
        }
    }
</style>
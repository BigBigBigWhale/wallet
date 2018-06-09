<template>
<div id="topNavCpt">
    <div class="nav-back" @click="goBack()" v-if="backShow"><img src="static/images/icon/icon-back.png">返回</div>
    <div class="nav-title" @click="openDown()">{{title}}<span class="nav-title-btn"><img src="static/images/icon/icon-side-down.png" alt=""></span></div>
    <div class="nav-add" @click="add()" v-if="addShow"><img src="static/images/icon/icon-add.png"></div>
    <div class="nav-down" v-if="sideDown.show">
        <div class="nav-down-li" @click="choice()" v-for="item in sideDown.list"><img :src="item.imgUrl" alt="">{{item.value}}</div>
    </div>
</div>
</template>

<script>
    import '../style/topNavCpt.less'
    let list = [
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'/static/images/icon/icon-bit.png',value:'BIT/EC'}
            ];
    export default{
        data: function () {
            return {
                title:'标题',
                backShow:true,
                addShow:false,
                sideDown:{
                    show:false,
                    value:'',
                    list:list,
                },
            }
        },
        methods: {
            goBack(){
                this.$router.back();
            },
            openDown(){
                this.sideDown.show = !this.sideDown.show;
            },
            add(){

            },
            choice(){

            },
        },
        mounted (){

        }
    }
</script>
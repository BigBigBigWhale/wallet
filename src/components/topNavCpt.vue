<template>
<div id="topNavCpt">
    <div class="nav-back" @click="goBack()" v-if="backShow"><img src="static/images/icon/icon-back.png">返回</div>
    <div class="nav-title" @click="openDown()">{{title}}<span class="nav-title-btn"><img src="static/images/icon/icon-side-down.png" alt=""></span></div>
    <div class="nav-add" @click="add()" v-if="addShow"><img src="static/images/icon/icon-add.png"></div>
    <div class="nav-down" v-show="sideDown.show">
        <div class="nav-down-li" @click="choice()" v-for="item in sideDown.list"><img :src="item.imgUrl" alt="">{{item.value}}</div>
    </div>
    <div class="cover" v-if="sideDown.show" @click="sideDown.show=false"></div>
</div>
</template>

<script>
    import '../style/topNavCpt.less'
    let list = [
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'},
            {imgUrl:'static/images/icon/icon-bit.png',value:'BIT/EC'}
            ];
    export default{
        data: function () {
            return {
                title:'EOS',
                backShow:true,
                addShow:false,
                sideDown:{
                    show:false,
                    value:'',
                    list:list,
                },
            }
        },
        watch:{
            'sideDown':{
                handler (){
                    let ele = document.body;
                    if(this.sideDown.show){
                        ele.style.overflow = 'hidden';
                    }else{
                        ele.style.overflow = 'visible';
                    }
                },
                deep:true,
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
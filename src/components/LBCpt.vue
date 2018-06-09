<template>
    <div id="LB">
        <ul id="imgs" :style="{width:totalLength+'px',left:-(index*singleLength)+'px'}">
            <li :style="{width: singleLength+'px'}" @click="lookDetail()"><img src="/static/images/home-back.png" alt=""/></li>
            <li :style="{width: singleLength+'px'}" @click="lookDetail()"><img src="/static/images/default-head-portrait.png" alt=""/></li>
            <li :style="{width: singleLength+'px'}" @click="lookDetail()"><img src="/static/images/home-back.png" alt=""/></li>
        </ul>
        <ol>
            <li :class="{'li-active':(index==0)}" @click="goIndex(0)"></li>
            <li :class="{'li-active':(index==1)}" @click="goIndex(1)"></li>
            <li :class="{'li-active':(index==2)}" @click="goIndex(2)"></li>
        </ol>
    </div>
</template>

<script>
    import '../style/LBCpt.less'
    import $ from 'jquery'
    let hint;
    export default {
        data () {
            return {
                singleLength: 0,
                totalLength:0,
                num:3,
                index:0,
                isLoop:false,
            }
        },
        props:['list'],
        methods:{
            goIndex (index){
                if(this.isLoop){
                    this.isLoop = false;
                }else{
                    clearTimeout(hint);
                }
                this.index = index;
            },
            lookDetail (){
                this.$emit('lookDetail');
            },
            loopLb (){
                if(!this.isLoop){
                    let self = this;
                    hint = setTimeout(() =>self.isLoop = true,3000);
                    return;
                }
                if(this.index<this.num-1){
                    this.index +=1;
                }else{
                    this.index = 0;
                }

            }
        },
        mounted (){
            this.singleLength = $('#LB').width();
            this.totalLength = this.singleLength*this.num;
            let self = this;
            setInterval(() =>self.loopLb(),3000);
            $('body').on('touchstart', '#imgs', function(e) {
                let touch = e.originalEvent,
                        startX = touch.changedTouches[0].pageX;

                $(this).on('touchmove', function(e) {
                    e.preventDefault();
                    touch = e.originalEvent.touches[0] ||
                            e.originalEvent.changedTouches[0];
                    if (touch.pageX - startX > 20) {//向左
                        if(self.index >0){
                            self.index -= 1;
                            self.isLoop = false;
                        }
                        $(this).off('touchmove');
                    } else if (touch.pageX - startX < -20) {//向右
                        if(self.index < self.num-1){
                            self.index += 1;
                            self.isLoop = false;
                        }
                        $(this).off('touchmove');

                    };

                });

            }).on('touchend', function() {
                $(this).off('touchmove');
            });
        }
    }
</script>
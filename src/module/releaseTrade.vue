<template>
    <div class="release">
        <div class="release-type">
            <button :class="{'active-btn':isBuy}" @click="choiceType(1)">买入</button>
            <button :class="{'active-btn':!isBuy}" @click="choiceType(0)">卖出</button>
        </div>
        <div class="release-form">
            <div class="release-term">
                <label for="">币种选择</label>
                <div>
                    <select name="" id="">
                        <option value="" disabled>币种选择</option>
                    </select>
                </div>
            </div>
            <div class="release-term">
                <label for="">购买数量</label>
                <div><input type="text" placeholder="请输入购买数量"></div>
            </div>
            <div class="release-term">
                <label for="">认购价格</label>
                <div class="release-term-double">
                    <div><span>￥</span><input type="text" placeholder="输入购买价格"></div>
                    <img src="../assets/icon/icon-trade-conversion.png" alt="">
                    <div><span>$</span><input type="text" placeholder="输入购买价格"></div>
                </div>
            </div>
            <div class="release-term">
                <label for="">最低交易</label>
                <div class="release-term-double">
                    <div><span>￥</span><input type="text" placeholder="最低交易100"></div>
                    <img src="../assets/icon/icon-trade-conversion.png" alt="">
                    <div><span>$</span><input type="text" placeholder="最低交易80"></div>
                </div>
            </div>
            <div class="release-term">
                <label for="">最高交易</label>
                <div class="release-term-double">
                    <div><span>￥</span><input type="text" placeholder="最高交易5000"></div>
                    <img src="../assets/icon/icon-trade-conversion.png" alt="">
                    <div><span>$</span><input type="text" placeholder="最高交易4000"></div>
                </div>
            </div>
            <div class="release-term">
                <label for="">付款方式</label>
                <div>
                    <select name="" id="">
                        <option value="" disabled>支付方式</option>
                    </select>
                </div>
            </div>
            <div class="release-term">
                <label for="">备注信息</label>
                <div><textarea name="" id="" placeholder="填写备注信息"></textarea></div>
            </div>
        </div>
        <button class="release-btn">确定发布</button>
        
    </div>
</template>

<script>
    import '../style/releaseTrade.less'
    export default{
        data: function () {
            return {
                isBuy:true,
            }
        },
        methods: {
            choiceType(type){
                this.isBuy = !!type;
            }
        },
        mounted (){
        }
    }
</script>
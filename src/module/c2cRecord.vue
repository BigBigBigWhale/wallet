<template>
    <div class="c2cRecord listModule">
        <div class="list-box">
            <div class="list-box-title"><span>购买QC</span><span>2018-05-26 05:22</span></div>
            <div class="list-box-content">
                <div class="c2cR-box">数量 <span class="c2cR-black">5000.00 QC</span>总价 <span class="c2cR-red">5000.00 CNY</span>单价 <span class="c2cR-red">￥0.689</span></div>
                <div class="c2cR-btn"><router-link to="/personal/c2cDetail">付款信息</router-link> 处理中...</div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../style/c2cRecord.less'
    export default{
        data: function () {
            return {}
        },
        methods: {},
        mounted (){
        }
    }
</script>
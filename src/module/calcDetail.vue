<template>
<div class="calcDetail">
    <div class="table">
        <table>
            <tr>
                <th>日期</th>
                <th>Wallet</th>
                <th>Vitality</th>
                <th>ID</th>
            </tr>
            <tr class="table-line"><td>05-25</td>
                <td>333.3222</td>
                <td>342.233</td>
                <td>123545635</td>
            </tr>
            <tr class="table-line"><td>05-25</td>
                <td>333.3222</td>
                <td>342.233</td>
                <td>123545635</td>
            </tr>
            <tr class="table-line"><td>05-25</td>
                <td>333.3222</td>
                <td>342.233</td>
                <td>123545635</td>
            </tr>
            <tr class="table-line"><td>05-25</td>
                <td>333.3222</td>
                <td>342.233</td>
                <td>123545635</td>
            </tr>
        </table>
    </div>

    <div id="page" class="pages"></div>
</div>
</template>

<script>
    import '../style/calcDetail.less'
    import '../components/pages/jquery.page.less'
    import $ from 'jquery'
    import jQuery from 'jquery'
    import '../components/pages/jquery.page'
    export default{
        data: function () {
            return {}
        },
        methods: {},
        mounted (){
            $(function(){
                $("#page").Page({
                    totalPages: 9,//分页总数
                    liNums: 7,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    hasFirstPage:false,
                    hasLastPage:false,
                    prv:'上一页',
                    next:'下一页',
                    callBack : function(page){
                        console.log(page)
                    }
                });
            })
        }
    }
</script>
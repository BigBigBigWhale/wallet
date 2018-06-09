<template>
    <div class="priceDetail">
        <top-nav-cpt></top-nav-cpt>
        航企
    </div>
</template>

<script>
import '../style/priceDetail.less'
import topNavCpt from '../components/topNavCpt'
import getUrlParam from '../components/getUrlParam'
export default{
    data: function () {
        return {

        }
    },
    components:{topNavCpt},
}
</script>
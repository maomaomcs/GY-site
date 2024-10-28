<script setup>
import {onMounted, ref} from "vue";
let click_url_ = ref('');
onMounted(()=>{
    const currentDomain = window.location.hostname;
    const currentPort = window.location.port;
    click_url_.value = (currentDomain + ':' + currentPort).toString()
    console.log((currentDomain + ':' + currentPort).toString())
    click_url_.value = 'http://' + click_url_.value +'/'
    document.getElementById('click').href = click_url_.value
})
</script>

<template>
    <div id="root">
        <div class="box-404-wrap">
            <div class="box">
                <div class="d-flex flex-column align-items-center">
                    <div class="text-wrap">
                        <h1 data-t="404" class="_h1">404</h1>
                    </div>
                    <div class="text-center mt-2">页面不存在或者您没有权限访问。</div>
                    <div class="mt-4"><a id="click" role="button" tabindex="0" class="btn btn-primary">回首页</a></div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    #root .box-404-wrap{
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    #root ._h1{
        margin: 15px;
        font-size: 50px;
    }

    #root .d-flex>*{
        margin: 10px 0;
    }
</style>

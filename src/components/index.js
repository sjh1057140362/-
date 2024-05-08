// 把components中所有组件进行全局化注册
import  imageView from "@/components/imageView/index.vue";
import Sku from '@/components/XtxSku/index.vue'

export const componentPlugin = {
    install(app){
app.component('XtximageView',imageView)
app.component('XtxSku',Sku)
    }
}
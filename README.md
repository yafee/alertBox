# alertBox简单的美化版alert

## 效果图

成功![](imgs/success.png)
失败![](imgs/error.png)
信息![](imgs/info.png)
警告![](imgs/warning.png)

## 简单的调用

```
$.alertBox(options)
<!-- options可以为对象 -->
options = {
  text:'xxxx',
  type:'type',
  textColor:'#******',
  fontSize:'*'
}
<!-- 或者数组,必须按顺序 -->
options = ['text','type','textColor','fontSize']

```
## 参数说明

`text:`必选项，弹出的信息

`type:`可选项，弹出框类型(success,error,warning,info四种类型)，默认:info

`textColor:`可选项，文字颜色，默认:#fff

`fontSize:`可选项，文字大小，默认:浏览器默认

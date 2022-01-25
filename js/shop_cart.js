$(function () {
    // 1、全选 全不选功能模块
    $(".checkall").change(function () {
        // console.log($("this").prop("checked"));
        $(".j-checkbox, .checkall").prop("checked", $("this").prop("checked"))
    })
})
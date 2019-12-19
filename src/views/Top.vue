<template>
    <div id="app">

        <h1 style="font-size:30px;font-family: 'PingFang SC';text-align: left;padding-left:250px;">豆瓣电影排行榜</h1>
        <p style="color:green;text-align: left;padding-left:250px;">豆瓣新片榜......</p>
        <div id="content">
            <hr STYLE="BORDER:0.5px dashed;color:rgba(203,203,203,0.75)">

        </div>
        <el-row v-for="movie in movieList" type="flex" justify="center" :gutter="1"
                style="border-bottom: 1px dashed darkgrey;margin-top: 15px;">
            <el-col :span="5">
                <img v-bind:src="movie.src" style="width:150px;">
                <!--<img src="../assets/6.jpg" style="width: 150px;height:230px;margin-bottom: 35px;">-->
            </el-col>
            <el-col :span="11" style="text-align: left">
                <div>
                    <template v-for="(a,index) in movie.alias">
                        <span style="color:#37a">{{a}}</span>
                        <template v-if="index!=movie.alias.length-1"></template>
                    </template>
                </div>
                <div style="padding-top:30px;width:500px;">
                    演员:{{movie.author}}
                    <el-row>
                        <div style="padding-top:30px;">
                            <div style="color:green;">{{movie.scoring.score}}</div>
                            <el-rate disabled v-model="movie.scoring. star"></el-rate>

                        </div>
                        <el-col span="5">
                            <div style="font-size:12px;padding-left: 2px">
                                ({{movie.amount}}人评价)
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import ElProgress from "../../node_modules/element-ui/packages/progress/src/progress";
    export default {
        data () {
            return {
                movieList: [
                    {
                         src:require("../assets/6.jpg"),
                        alias: "爱尔兰人/爱尔兰杀手（港） / 听说你刷房子了 ",
                        author: [
                            "2019-08-31(威尼斯电影节)",
                            "2019-11-01(美国)",
                            "杰昆·菲尼克斯",
                            "罗伯特·德尼罗",
                            " 马克·马龙",
                            "莎姬·贝兹",
                            "谢伊·惠格姆",
                            "弗兰西丝·康罗伊",
                            "布莱恩·考伦",
                            "布莱恩·泰里·亨利",
                            "布莱特·卡伦 ",
                            "道格拉斯·霍奇斯",
                            "格伦·弗莱施勒",
                            "比尔·坎普..."],
                        scoring: {
                            score: 8.8,
                            star: 4.5
                        },
                        amount: 474206
                    },
                    {
                        src:require("../assets/6.jpg"),
                        alias: "爱尔兰人/爱尔兰杀手（港） / 听说你刷房子了 ",
                        author: [
                            "2019-08-31(威尼斯电影节)",
                            "2019-11-01(美国)",
                            "杰昆·菲尼克斯",
                            "罗伯特·德尼罗",
                            " 马克·马龙",
                            "莎姬·贝兹",
                            "谢伊·惠格姆",
                            "弗兰西丝·康罗伊",
                            "布莱恩·考伦",
                            "布莱恩·泰里·亨利",
                            "布莱特·卡伦 ",
                            "道格拉斯·霍奇斯",
                            "格伦·弗莱施勒",
                            "比尔·坎普..."],
                        scoring:{ score: 8.9,
                        star: 4.5},
                        amount: 666206

                    },
                    {
                        src:require("../assets/6.jpg"),
                        alias: "爱尔兰人/爱尔兰杀手（港） / 听说你刷房子了 ",
                        author: [
                            "2019-08-31(威尼斯电影节)",
                            "2019-11-01(美国)",
                            "杰昆·菲尼克斯",
                            "罗伯特·德尼罗",
                            " 马克·马龙",
                            "莎姬·贝兹",
                            "谢伊·惠格姆",
                            "弗兰西丝·康罗伊",
                            "布莱恩·考伦",
                            "布莱恩·泰里·亨利",
                            "布莱特·卡伦 ",
                            "道格拉斯·霍奇斯",
                            "格伦·弗莱施勒",
                            "比尔·坎普..."],
                        scoring:{score: 9.1,
                        star: 3.0},
                        amount: 471233,

                    },
                    {
                        src:require("../assets/6.jpg"),
                        alias: "爱尔兰人/爱尔兰杀手（港） / 听说你刷房子了 ",
                        author: [
                            "2019-08-31(威尼斯电影节)",
                            "2019-11-01(美国)",
                            "杰昆·菲尼克斯",
                            "罗伯特·德尼罗",
                            " 马克·马龙",
                            "莎姬·贝兹",
                            "谢伊·惠格姆",
                            "弗兰西丝·康罗伊",
                            "布莱恩·考伦",
                            "布莱恩·泰里·亨利",
                            "布莱特·卡伦 ",
                            "道格拉斯·霍奇斯",
                            "格伦·弗莱施勒",
                            "比尔·坎普..."],
                        scoring:{ score: 5.0,
                        star: 5.0},
                        amount: 674206,

                    },
                    {
                        src:require("../assets/6.jpg"),
                        alias: "爱尔兰人/爱尔兰杀手（港） / 听说你刷房子了 ",
                        author: [
                            "2019-08-31(威尼斯电影节)",
                            "2019-11-01(美国)",
                            "杰昆·菲尼克斯",
                            "罗伯特·德尼罗",
                            " 马克·马龙",
                            "莎姬·贝兹",
                            "谢伊·惠格姆",
                            "弗兰西丝·康罗伊",
                            "布莱恩·考伦",
                            "布莱恩·泰里·亨利",
                            "布莱特·卡伦 ",
                            "道格拉斯·霍奇斯",
                            "格伦·弗莱施勒",
                            "比尔·坎普..."],
                        scoring:{ score: 7.5,
                        star: 4.7},
                        amount: 532106,

                    }
                ]
            }
        }
    }
</script>
<!-- </div>
<hr STYLE="BORDER:0.5px dashed;color:rgba(203,203,203,0.75)">
<div><el-row  v-for="movie in movieList" type="flex" justify="center" :gutter="20">

<div v-for="movie in movieList">
    <img v-bind:src="movie.src"/>
    <h3>{{movie.alias}}</h3>
    <span>{{movie.author}}</span>
    <span>{{movie. actors}}</span>


</div>




</el-row></div></template>
<script>
var app = new Vue({
el: "app",
data: {
    movieList: [
        {
            src: "../1.jpg",
            alias: "小丑/小丑起源电影：罗密欧 / Romeo / Joker Origin ",
            alias: "小丑/小丑起源电影：罗密欧 / Romeo / Joker Origin ",
            author: [
                "托德·菲利普斯",
                "斯科特·西尔弗",
                "鲍勃·凯恩",
                "比尔·芬格"],
            actors: [
                "杰昆·菲尼克斯",
                "罗伯特·德尼罗",
                "马克·马龙",
                "莎姬·贝兹",
                " 谢伊·惠格姆"]
        },

        {}, {}, {}]
}})


</script>
-->
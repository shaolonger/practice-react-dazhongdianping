const KOA = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body')();

var app = new KOA();

const AD = require('./home/ad');
const LIST = require('./home/list');
const INFO = require('./detail/info');
const COMMENT = require('./detail/comment');
const ORDERLIST = require('./user/orderList');

// router.get('/api/get', async ctx => {
//     ctx.body = 'hellow koa';
// });
// router.post('/api/post', koaBody, ctx => {
//     ctx.body = {
//         a: 1,
//         b: false
//     }
// });

router.get('/api/homead', ctx => {
    ctx.body = AD;
});

router.get('/api/homelist/:city/:page', (ctx) => {
    var params = ctx.params;
    var city = params.city;
    var page = params.page;
    console.log('当前城市', city);
    console.log('当前页数', page);
    ctx.body = LIST;
})

router.get('/api/detail/info/:id', (ctx) => {
    ctx.body = INFO;
})

router.get('/api/detail/comment/:id/:page', (ctx) => {
    var params = ctx.params;
    var id = params.id;
    var page = params.page;
    console.log('当前商户id', id);
    console.log('当前评论页数', page);
    ctx.body = COMMENT;
})

router.get('/api/orderlist/:username', (ctx) => {
    ctx.body = ORDERLIST;
})

router.post('/api/submitComment', (ctx) => {
    ctx.body = {
        errno: 0,
        msg: 'ok'
    };
})

app.use(router.routes());
app.listen(3000);

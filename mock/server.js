const KOA = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body')();

var app = new KOA();

const AD = require('./Home/ad');
const LIST = require('./Home/list');

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

app.use(router.routes());
app.listen(3000);

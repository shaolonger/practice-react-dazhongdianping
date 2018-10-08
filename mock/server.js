const KOA = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body')();

var app = new KOA();

var HomeAD = require('./Home/homead');

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
    ctx.body = HomeAD;
});

app.use(router.routes());
app.listen(3000);

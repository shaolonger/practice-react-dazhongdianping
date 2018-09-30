const KOA = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body')();

var app = new KOA();

router.get('/api/get', async ctx => {
    ctx.body = 'hellow koa';
});
router.post('/api/post', koaBody, ctx => {
    ctx.body = {
        a: 1,
        b: false
    }
});

app.use(router.routes());
app.listen(3000);

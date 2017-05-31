const Koa = require('koa'),
    Router = require('koa-router');

const app = new Koa(),
    router = new Router();

let users = [
    {
        name: 'Jacob',
        email: 'info@geeklaunch.net',
    },
    {
        name: 'Kenny',
        email: 'kenny@example.net',
    },
    {
        name: 'Joe',
        email: 'joe@example.org',
    },
];

router.get('/user/:id', ctx => {
    ctx.body = users[ctx.params.id];
});

router.post('/user/:id', ctx => {
    ctx.body = Object.assign(users[ctx.params.id], ctx.request.body);
});

app
    .use(require('koa-body')())
    .use(router.allowedMethods())
    .use(router.routes());

app.listen(3000);

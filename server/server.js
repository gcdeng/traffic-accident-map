const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const serve = require('koa-static');
const path = require('path');

const PORT = process.env.PORT || 8000;
const app = new Koa();
const router = Router();
const buildPath = path.join(__dirname, '../build');

app.use(serve(buildPath));

app.use(views(buildPath), {
    extension: 'html'
});

router.get('/', async (ctx, next)=>{
    await ctx.render('index');
});

app.use(router.routes());
console.log('Server is listening on port', PORT);
app.listen(PORT);
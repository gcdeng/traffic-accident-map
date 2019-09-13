const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const serve = require('koa-static');
const cors = require('@koa/cors');
const initDb = require('./models/db');
const db = initDb();
const LocationModel = require('./models/location');

const PORT = process.env.PORT || 8000;
const app = new Koa();
const router = new Router();
const apiRouter = new Router({
	prefix: '/api'
});
const buildPath = path.join(__dirname, '../build');

app.use(cors({
    origin: '*'
}));
app.use(serve(buildPath));

app.use(views(buildPath), {
    extension: 'html'
});

router.get('/', async (ctx, next)=>{
    await ctx.render('index');
});

apiRouter.get('/locations', async(ctx, next)=>{
    // query db
    let year = ctx.query.year>1911? ctx.query.year-1911:ctx.query.year;
    let findOption = {
        "發生時間": { "$regex": year, "$options": "i" },
    };
    let city = ctx.query.city || '';
    if(city){
        let regex = new RegExp(`^${city}`, 'i');
        findOption["發生地點"] = { "$regex": regex };
    }
    let locations = await LocationModel.find(findOption);
    ctx.body = locations;
});

app.use(router.routes());
app.use(apiRouter.routes());
console.log('Server is listening on port', PORT);
app.listen(PORT);
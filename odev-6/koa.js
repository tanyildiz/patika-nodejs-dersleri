import Koa from 'koa';
//import compose from 'koa-compose' //if you want to use separate pages uncomment this

const app = new Koa();

async function home(ctx, next) {
    if ('/' == ctx.path) {
        ctx.body = '<h2>Main page</h2>'
    } else if ('/about' == ctx.path) {
        ctx.body = '<h2>About page</h2>'
    } else if ('/contact' == ctx.path) {
        ctx.body = '<h2>Contact page</h2>'
    } else {
        ctx.body = '<h2>Not Found</h2>'
        await next()
    }
}

//if you want to use separate pages uncomment below

/* async function about(ctx, next) {
    if ('/about' == ctx.path) {
        ctx.body = '<h2>About page</h2>'
    } else {
        await next()
    }
}

async function contact(ctx, next) {
    if ('/contact' == ctx.path) {
        ctx.body = '<h2>Contact page</h2>'
    } else {
        ctx.body = '<h2>Not Found</h2>'
        await next()
    }
} 

const all = compose([home, about, contact])
*/

app.use(home);

app.listen(3000, () => {
    console.log('Server started...')
});
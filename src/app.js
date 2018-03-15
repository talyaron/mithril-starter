const m = require('mithril');


var More = {
    view: function (vnode) {
        return (
            <div >
                <h3>Hi {vnode.attrs.message}</h3>
                <h2>Shlomi {vnode.attrs.shlomi}</h2>
            </div>
        )
    }
}

var App = {
    view: function () {
        return (
            <main>
                <h1>Hello world</h1>
                <br />
                <More message='good point!' shlomi='10' />
            </main>
        )
    }
}



module.exports = App;
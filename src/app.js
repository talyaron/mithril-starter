const m = require('mithril');

var Message = {
    view: function (vnode) {
        return (
            <div>
                <h3>{vnode.attrs.message}</h3>
            </div>
        )
    }
}

var App = {
    view: function () {
        return (
            <main>
                <h1>Hello world</h1>
                <Message message='good point!' />
            </main>
        )
    }
}



module.exports = App;
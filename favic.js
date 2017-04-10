var run     = Symbol("run");
var process = Symbol("process");

class Favic {
    constructor(data) {
        this.old        = data.old
        this.new        = data.new
        this.timeout    = data.timeout
        this[run]()
    }

    [process]() {
        var base = this
        var icon = document.querySelector("link[rel='icon']")
        document.addEventListener("visibilitychange", function() {
            setTimeout(function() {
                if(document.hidden) {
                    icon.href = base.new
                } else {
                    icon.href = base.old
                }
            }, base.timeout)
        }, false)
    }

    [run]() {
        var base = this[process]()
        window.addEventListener("load", function() {
            base
        }, false)
    }
}


cc.Class({
    extends: cc.Component,

    properties: {
        //跳跃高度
        jumpHeight: 0,
        //跳跃持续时间
        duration: 0,
        //速度
        speed: 0
    },

    mergeAction () {
        // 用到了一些 Cocos2d-js 引擎中的 Action 来实现主角的跳跃动画
        var jump = cc.moveBy(this.duration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut())
        var down = cc.moveBy(this.duration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn())
        return cc.sequence(jump, down)
    },

    inputControl () {
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: (keyCode, event)=>{
               this.node.runAction(this.mergeAction())
            }
        }, this.node)
    },

    // 用来初始化
    onLoad: function () {
        this.node.runAction(this.mergeAction())
        this.inputControl()
    },

    // 每次frame重新渲染调用
    update: function (dt) {

    },
});

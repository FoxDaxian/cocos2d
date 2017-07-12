let player = require('hero')
cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node
        },
        bgsprite1: {
            default: null,
            type: cc.Node
        },
        bgsprite2: {
            default: null,
            type: cc.Node
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        }
    },

    //用户操作监听
    eventControl() {
        const _this = this
        const hero = _this.player.getComponent(player) //属性上的角色绑定require进来的控件
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            swallowTouches: true,
            onKeyPressed: function(keyCode, event) {
                if (keyCode === 32) {
                    var target = event.getCurrentTarget();
                    var locationInNode = target.convertToNodeSpace(keyCode.getLocation());
                    cc.log("当前点击坐标"+locationInNode);

                    hero.node.runAction(hero.jumpRunAction)
                    return true
                }
            },
            onKeyReleased: function(keyCode, event) {
                if (keyCode === 32) {
                    console.log('自由落体')
                }
            }
        }, _this.node)

    },

    // use this for initialization
    onLoad: function() {
        // this.eventControl()
    },

    // called every frame, uncomment this function to activate update callback
    update: function(dt) {

    },
});

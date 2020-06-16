// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },
    ctor:function(){
        this.moving = false;
    },
    onclickMove:function(){
        this.moving = true;
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.setPosition(cc.v2(960/2,-640/2));
    },

    start () {

    },

    update (dt) {
        if(this.moving){
            this.node.x -= dt*100;
            if(this.node.x < 260){
                this.node.x = 260;
            }
        }
    },
});

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
        //true为right,false为left
        this.moving = false;
        
    },
    onclickMove:function(){
        this.moving = !this.moving;
        if(this.moving){
            // this.setArrowTip(">>");
            this.node.getChildByName("btnLeft").active = false;
            this.node.getChildByName("btnRight").active = true;
        }else{
            this.node.getChildByName("btnRight").active = false;
            this.node.getChildByName("btnLeft").active = true;
        }
    },
    // // LIFE-CYCLE CALLBACKS:
    // 暂时不知道为啥不能通过代码更改按钮的文本
    // setArrowTip:function (tip) { 
    //     var node = this.node.getChildByName("btn1");
    //     node = node.getChildByName("Background");
    //     node.getChildByName("Label").String = tip;
    // },
    onLoad () {
        this.node.setPosition(cc.v2(960/2,-640/2));
        // this.setArrowTip("<<");
    },

    start () {

    },

    update (dt) {
        if(this.moving){
            this.node.x -= dt*390;
            if(this.node.x < 260){
                this.node.x = 260;
            }
        }else{
            this.node.x += dt*390;
            if(this.node.x > 480){
                this.node.x = 480;
            }
        }
    },
});

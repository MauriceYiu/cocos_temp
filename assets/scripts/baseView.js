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
        alert:{
            type:cc.Prefab,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onClickBtn:function () { 
        var node = cc.instantiate(this.alert);
        this.node.addChild(node);
        node = node.getComponent("alert");
        node.show("你好",function(){
            cc.log("取消");
        },function(){
            cc.log("确认");
        });
    },
    start () {

    },

    // update (dt) {},
});

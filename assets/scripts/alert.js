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
        tipInfo: {
            type: cc.Label,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    show:function (tip,cancelCb,sureCb) { 
        this.clear();
        this.node.active = true;
        this.setTipInfo(tip);
        this.setCancelbtnCb(cancelCb);
        this.setSurebtnCb(sureCb);
    },
    clear:function (tip,cancelCb,sureCb) { 
        this.setTipInfo("");
        this.setCancelbtnCb(null);
        this.setSurebtnCb(null);
    },
    onClickCancelBtn: function () {
        this.node.active = false;
        if (this.cancelCb != null) {
            this.cancelCb();
        }
    },
    onClickSureBtn: function () {
        this.node.active = false;
        if (this.sureCb != null) {
            this.sureCb();
        }
    },
    setTipInfo: function (infoStr) {
        this.tipInfo.string = infoStr;
    },
    setCancelbtnCb: function (cb) {
        this.cancelCb = cb;
    },
    setSurebtnCb: function (cb) {
        this.sureCb = cb;
    },
    start() {

    },

    // update (dt) {},
});

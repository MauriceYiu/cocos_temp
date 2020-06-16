function createAlert(parent,tip,cancelCb,sureCb){
    cc.loader.loadRes("alert",function(err,prefab){
        var node = cc.instantiate(prefab);
        parent.addChild(node);
        node = node.getComponent("alert");
        node.show(tip,cancelCb,sureCb);
    })
}
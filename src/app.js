
var MenuLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

		var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        helloLabel.x = size.width / 2;
        helloLabel.y = 0;
        this.addChild(helloLabel, 5);

        return true;
    },

    onTouchBegan : function(touch, event) {
        var pos = touch.getLocation();
        cc.log("onTouchBegan id="+touch.getID()+" pos="+JSON.stringify(pos));
        return true;
    },

    onTouchMoved : function(touch, event) {
        var pos = touch.getLocation();
        cc.log("onTouchMoved id="+touch.getID()+" pos="+JSON.stringify(pos));
    },

    onTouchEnded : function(touch, event) {
        var pos = touch.getLocation();
        cc.log("onTouchEnded id="+touch.getID()+" pos="+JSON.stringify(pos));
    }

});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});


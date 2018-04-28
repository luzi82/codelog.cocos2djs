
var CheckerBoardLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

		cc.log("XXX");
        var size = cc.winSize;
        for(x=0;x<size.width;x+=256){
	        for(y=0;y<size.height;y+=256){
	        	var chessbox=new cc.Sprite(res.chessbox_png);
	        	chessbox.attr({
	        		x: x,
	        		y: y,
	        		anchorX: 0,
	        		anchorY: 0,
	        		rotate: 0
	        	});
	        	this.addChild(chessbox,0);
	        	cc.log("x="+x+" y="+y);
	        }
        }
		cc.log("YYY");

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);

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
        cc.director.runScene(new MenuScene());
    }

});

var CheckerBoardScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new CheckerBoardLayer();
        this.addChild(layer);
    }
});


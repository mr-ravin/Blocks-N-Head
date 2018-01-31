gdjs.firstCode = {};


gdjs.firstCode.GDWoodenBlockObjects1= [];
gdjs.firstCode.GDBoyObjects1= [];
gdjs.firstCode.GDScore_95viewObjects1= [];
gdjs.firstCode.GDscore_95valueObjects1= [];

gdjs.firstCode.conditionTrue_0 = {val:false};
gdjs.firstCode.condition0IsTrue_0 = {val:false};
gdjs.firstCode.condition1IsTrue_0 = {val:false};

gdjs.firstCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.firstCode.GDWoodenBlockObjects1.length = 0;
gdjs.firstCode.GDBoyObjects1.length = 0;
gdjs.firstCode.GDScore_95viewObjects1.length = 0;
gdjs.firstCode.GDscore_95valueObjects1.length = 0;


{

gdjs.firstCode.GDscore_95valueObjects1.createFrom(runtimeScene.getObjects("score_value"));
gdjs.firstCode.GDWoodenBlockObjects1.length = 0;

gdjs.firstCode.condition0IsTrue_0.val = false;
{
gdjs.firstCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.90, "loop");
}if (gdjs.firstCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("WoodenBlock", gdjs.firstCode.GDWoodenBlockObjects1).getEventsObjectsMap(), gdjs.random(gdjs.evtTools.window.getCanvasWidth(runtimeScene)), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loop");
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.firstCode.GDscore_95valueObjects1.length ;i < len;++i) {
    gdjs.firstCode.GDscore_95valueObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.firstCode.GDWoodenBlockObjects1.createFrom(runtimeScene.getObjects("WoodenBlock"));

{for(var i = 0, len = gdjs.firstCode.GDWoodenBlockObjects1.length ;i < len;++i) {
    gdjs.firstCode.GDWoodenBlockObjects1[i].addForce(0, 150, 0);
}
}
}


{

gdjs.firstCode.GDBoyObjects1.length = 0;

gdjs.firstCode.condition0IsTrue_0.val = false;
{
gdjs.firstCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.firstCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("Boy", gdjs.firstCode.GDBoyObjects1).getEventsObjectsMap(), 0, gdjs.evtTools.window.getCanvasWidth(runtimeScene)/2, "");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "216;176;76");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.firstCode.GDBoyObjects1.createFrom(runtimeScene.getObjects("Boy"));

gdjs.firstCode.condition0IsTrue_0.val = false;
{
gdjs.firstCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("Boy", gdjs.firstCode.GDBoyObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.firstCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.firstCode.GDBoyObjects1.length ;i < len;++i) {
    gdjs.firstCode.GDBoyObjects1[i].putAround(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.window.getCanvasHeight(runtimeScene)- ((gdjs.firstCode.GDBoyObjects1[i].getHeight())/2), 0, 0);
}
}}

}


{

gdjs.firstCode.GDBoyObjects1.createFrom(runtimeScene.getObjects("Boy"));
gdjs.firstCode.GDWoodenBlockObjects1.createFrom(runtimeScene.getObjects("WoodenBlock"));

gdjs.firstCode.condition0IsTrue_0.val = false;
{
gdjs.firstCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("WoodenBlock", gdjs.firstCode.GDWoodenBlockObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Boy", gdjs.firstCode.GDBoyObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.firstCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "second", false);
}}

}

return;
}
gdjs['firstCode']= gdjs.firstCode;

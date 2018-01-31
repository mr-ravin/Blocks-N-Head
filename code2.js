gdjs.secondCode = {};


gdjs.secondCode.GDScoreObjects1= [];
gdjs.secondCode.GDvalueObjects1= [];
gdjs.secondCode.GDDetailsObjects1= [];

gdjs.secondCode.conditionTrue_0 = {val:false};
gdjs.secondCode.condition0IsTrue_0 = {val:false};
gdjs.secondCode.condition1IsTrue_0 = {val:false};

gdjs.secondCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.secondCode.GDScoreObjects1.length = 0;
gdjs.secondCode.GDvalueObjects1.length = 0;
gdjs.secondCode.GDDetailsObjects1.length = 0;


{

gdjs.secondCode.GDvalueObjects1.createFrom(runtimeScene.getObjects("value"));

gdjs.secondCode.condition0IsTrue_0.val = false;
{
gdjs.secondCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.secondCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "216;176;76");
}{for(var i = 0, len = gdjs.secondCode.GDvalueObjects1.length ;i < len;++i) {
    gdjs.secondCode.GDvalueObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.secondCode.condition0IsTrue_0.val = false;
{
gdjs.secondCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "exitloop");
}if (gdjs.secondCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "zero", false);
}}

}

return;
}
gdjs['secondCode']= gdjs.secondCode;

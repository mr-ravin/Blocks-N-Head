gdjs.zeroCode = {};


gdjs.zeroCode.GDdetailsObjects1= [];
gdjs.zeroCode.GDiconboyObjects1= [];
gdjs.zeroCode.GDiconblockObjects1= [];
gdjs.zeroCode.GDDeveloperObjects1= [];
gdjs.zeroCode.GDdeveloper2Objects1= [];

gdjs.zeroCode.conditionTrue_0 = {val:false};
gdjs.zeroCode.condition0IsTrue_0 = {val:false};
gdjs.zeroCode.condition1IsTrue_0 = {val:false};

gdjs.zeroCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.zeroCode.GDdetailsObjects1.length = 0;
gdjs.zeroCode.GDiconboyObjects1.length = 0;
gdjs.zeroCode.GDiconblockObjects1.length = 0;
gdjs.zeroCode.GDDeveloperObjects1.length = 0;
gdjs.zeroCode.GDdeveloper2Objects1.length = 0;


{


gdjs.zeroCode.condition0IsTrue_0.val = false;
{
gdjs.zeroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.zeroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "216;176;76");
}}

}


{


gdjs.zeroCode.condition0IsTrue_0.val = false;
{
gdjs.zeroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "startloop");
}if (gdjs.zeroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "first", false);
}}

}

return;
}
gdjs['zeroCode']= gdjs.zeroCode;

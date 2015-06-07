#target photoshop
//
// vertical_16_square_grid.jsx
//

//
// Generated Wed May 27 2015 20:54:56 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== vertical-16-square-grid ==============
//
function vertical_16_square_grid() {
  // Canvas Size
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Width, PSUnit.Distance, 1478.376);
    desc1.putEnumerated(PSKey.Horizontal, PSType.HorizontalLocation, PSEnum.Center);
    desc1.putEnumerated(PSString.canvasExtensionColorType, PSString.canvasExtensionColorType, PSEnum.BackgroundColor);
    executeAction(sTID('canvasSize'), desc1, dialogMode);
  };

  // Crop
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 0);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 0);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 378);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Width, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/00.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 0);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 756);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/01.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 0);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 1134);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/02.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 0);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 1098);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 1476);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/03.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 0);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 378);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/04.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step25(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step26(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step27(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 756);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step28(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step29(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/05.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step30(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step31(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step32(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 1134);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step33(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step34(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/06.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step35(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step36(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step37(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 1098);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 1476);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step38(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step39(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/07.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step40(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step41(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step42(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 0);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 1134);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 378);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step43(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step44(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/08.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step45(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step46(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step47(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 1134);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 756);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step48(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step49(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/09.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step50(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step51(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step52(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 1134);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 1134);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step53(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step54(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/10.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step55(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step56(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step57(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 1098);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 1136.4);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 1478.4);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step58(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step59(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/11.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step60(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step61(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step62(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 1098);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 0);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 1476);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 378);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step63(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step64(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/12.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step65(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step66(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step67(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 1098);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 378);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 1476);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 756);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step68(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step69(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/13.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step70(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step71(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step72(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 1098);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 756);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 1476);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 1134);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step73(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step74(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/14.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Select
  function step75(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Select
  function step76(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(PSClass.HistoryState, PSType.Ordinal, PSEnum.Previous);
    desc1.putReference(PSString.Null, ref1);
    executeAction(PSEvent.Select, desc1, dialogMode);
  };

  // Crop
  function step77(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(PSKey.Top, PSUnit.Distance, 1098);
    desc2.putUnitDouble(PSKey.Left, PSUnit.Distance, 1098);
    desc2.putUnitDouble(PSKey.Bottom, PSUnit.Distance, 1478.4);
    desc2.putUnitDouble(PSKey.Right, PSUnit.Distance, 1478.4);
    desc1.putObject(PSKey.To, PSClass.Rectangle, desc2);
    desc1.putUnitDouble(PSKey.Angle, PSUnit.Angle, 0);
    desc1.putBoolean(PSEvent.Delete, true);
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("unconstrained"));
    executeAction(PSEvent.Crop, desc1, dialogMode);
  };

  // Image Size
  function step78(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(PSKey.Height, PSUnit.Pixels, 800);
    desc1.putUnitDouble(PSKey.Resolution, PSUnit.Density, 72);
    desc1.putBoolean(PSString.scaleStyles, true);
    desc1.putBoolean(PSKey.ConstrainProportions, true);
    desc1.putEnumerated(PSKey.Interpolation, PSType.Interpolation, PSString.bicubicAutomatic);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Save
  function step79(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(PSKey.ExtendedQuality, 12);
    desc2.putEnumerated(PSKey.MatteColor, PSKey.MatteColor, PSEnum.None);
    desc1.putObject(PSKey.As, PSClass.JPEGFormat, desc2);
    desc1.putPath(PSKey.In, new File(decodeURI(app.activeDocument.path)+'/15.jpg'));
    desc1.putInteger(PSKey.DocumentID, 36);
    desc1.putBoolean(PSKey.Copy, true);
    desc1.putBoolean(PSKey.LowerCase, true);
    executeAction(PSEvent.Save, desc1, dialogMode);
  };

  // Close
  function step80(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(PSKey.Saving, PSType.YesNo, PSEnum.No);
    executeAction(PSEvent.Close, desc1, dialogMode);
  };

  step1();      // Canvas Size
  step2();      // Crop
  step3();      // Image Size
  step4();      // Save
  step5();      // Select
  step6();      // Select
  step7();      // Crop
  step8();      // Image Size
  step9();      // Save
  step10();      // Select
  step11();      // Select
  step12();      // Crop
  step13();      // Image Size
  step14();      // Save
  step15();      // Select
  step16();      // Select
  step17();      // Crop
  step18();      // Image Size
  step19();      // Save
  step20();      // Select
  step21();      // Select
  step22();      // Crop
  step23();      // Image Size
  step24();      // Save
  step25();      // Select
  step26();      // Select
  step27();      // Crop
  step28();      // Image Size
  step29();      // Save
  step30();      // Select
  step31();      // Select
  step32();      // Crop
  step33();      // Image Size
  step34();      // Save
  step35();      // Select
  step36();      // Select
  step37();      // Crop
  step38();      // Image Size
  step39();      // Save
  step40();      // Select
  step41();      // Select
  step42();      // Crop
  step43();      // Image Size
  step44();      // Save
  step45();      // Select
  step46();      // Select
  step47();      // Crop
  step48();      // Image Size
  step49();      // Save
  step50();      // Select
  step51();      // Select
  step52();      // Crop
  step53();      // Image Size
  step54();      // Save
  step55();      // Select
  step56();      // Select
  step57();      // Crop
  step58();      // Image Size
  step59();      // Save
  step60();      // Select
  step61();      // Select
  step62();      // Crop
  step63();      // Image Size
  step64();      // Save
  step65();      // Select
  step66();      // Select
  step67();      // Crop
  step68();      // Image Size
  step69();      // Save
  step70();      // Select
  step71();      // Select
  step72();      // Crop
  step73();      // Image Size
  step74();      // Save
  step75();      // Select
  step76();      // Select
  step77();      // Crop
  step78();      // Image Size
  step79();      // Save
  step80();      // Close
};


//
// vertical_16_square_grid.loadSymbols
//   Loading up the symbol definitions like this makes it possible
//   to include several of these generated files in one master file
//   provided a prefix is specified other than the default. It also
//   skips the definitions if PSConstants has already been loaded.
//
vertical_16_square_grid.loadSymbols = function() {
  var dbgLevel = $.level;
  $.level = 0;
  try {
    PSConstants;
    return; // only if PSConstants is defined
  } catch (e) {
  } finally {
    $.level = dbgLevel;
  }
  var needDefs = true;
  $.level = 0;
  try {
    PSClass;
    needDefs = false;
  } catch (e) {
  } finally {
    $.level = dbgLevel;
  }
  if (needDefs) {
    PSClass = function() {};
    PSEnum = function() {};
    PSEvent = function() {};
    PSForm = function() {};
    PSKey = function() {};
    PSType = function() {};
    PSUnit = function() {};
    PSString = function() {};
  }

  // We may still end up duplicating some of the following definitions
  // but at least we don't redefine PSClass, etc... and wipe out others
  PSClass.HistoryState = cTID('HstS');
  PSClass.JPEGFormat = cTID('JPEG');
  PSClass.Rectangle = cTID('Rctn');
  PSEnum.BackgroundColor = cTID('BckC');
  PSEnum.Center = cTID('Cntr');
  PSEnum.No = cTID('N   ');
  PSEnum.None = cTID('None');
  PSEnum.Previous = cTID('Prvs');
  PSEvent.Close = cTID('Cls ');
  PSEvent.Crop = cTID('Crop');
  PSEvent.Delete = cTID('Dlt ');
  PSEvent.Save = cTID('save');
  PSEvent.Select = cTID('slct');
  PSKey.Angle = cTID('Angl');
  PSKey.As = cTID('As  ');
  PSKey.Bottom = cTID('Btom');
  PSKey.ConstrainProportions = cTID('CnsP');
  PSKey.Copy = cTID('Cpy ');
  PSKey.DocumentID = cTID('DocI');
  PSKey.ExtendedQuality = cTID('EQlt');
  PSKey.Height = cTID('Hght');
  PSKey.Horizontal = cTID('Hrzn');
  PSKey.In = cTID('In  ');
  PSKey.Interpolation = cTID('Intr');
  PSKey.Left = cTID('Left');
  PSKey.LowerCase = cTID('LwCs');
  PSKey.MatteColor = cTID('MttC');
  PSKey.Resolution = cTID('Rslt');
  PSKey.Right = cTID('Rght');
  PSKey.Saving = cTID('Svng');
  PSKey.To = cTID('T   ');
  PSKey.Top = cTID('Top ');
  PSKey.Width = cTID('Wdth');
  PSString.Null = sTID('null');
  PSString.bicubicAutomatic = sTID('bicubicAutomatic');
  PSString.canvasExtensionColorType = sTID('canvasExtensionColorType');
  PSString.scaleStyles = sTID('scaleStyles');
  PSType.HorizontalLocation = cTID('HrzL');
  PSType.Interpolation = cTID('Intp');
  PSType.Ordinal = cTID('Ordn');
  PSType.YesNo = cTID('YsN ');
  PSUnit.Angle = cTID('#Ang');
  PSUnit.Density = cTID('#Rsl');
  PSUnit.Distance = cTID('#Rlt');
  PSUnit.Pixels = cTID('#Pxl');
};

vertical_16_square_grid.loadSymbols(); // load up our symbols



//=========================================
//                    vertical_16_square_grid.main
//=========================================
//

vertical_16_square_grid.main = function () {
  vertical_16_square_grid();
};

vertical_16_square_grid.main();

// EOF

"vertical_16_square_grid.jsx"
// EOF

var win = Titanium.UI.createWindow({
	title: 'Label View',
	backgroundColor: '#FFFFFF',
	exitOnClose: true
});

var label01 = Titanium.UI.createLabel({
	text: 'Label 01',
	top: 0,
	left: 0,
	height: 24,
	width: '100%',
	textAlign: 'center',
	color: "#FFFFFF",
	backgroundColor: "#363F45"
});

var label02 = Titanium.UI.createLabel({
	text: 'Label 02',
	top: 24,
	left: 0,
	height: 36,
	width: '75%',
	textAlign: 'left',
	color: "#000000",
	backgroundColor: "#FEB41C"
});

var label03 = Titanium.UI.createLabel({
	text: 'Label 03',
	bottom: 0,
	height: "25%",
	width: '75%',
	textAlign: 'right',
	font: {fontSize: 36, fontStyle: "italic"},
	color: "#F1ECB5",
	backgroundColor: "#371740"
});

var label04 = Titanium.UI.createLabel({
	text: 'Label 04',
});

win.add(label01);
win.add(label02);
win.add(label03);
win.add(label04);

win.open();


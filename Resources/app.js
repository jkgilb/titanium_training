var win = Titanium.UI.createWindow({
	title: 'Label View',
	backgroundColor: '#FFFFFF',
	exitOnClose: true
});

var view01 = Titanium.UI.createView({
	height: 20,
	width: '100%',
	top: 0,
	left: 0,
	backgroundColor: 'purple'
});

var view02 = Titanium.UI.createView({
	height: 40,
	width: '100%',
	top: 60,
	left: 0,
	backgroundColor: 'green'
});

var view03 = Titanium.UI.createView({
	height: 60,
	width: 20,
	top: 100,
	left: 100,
	backgroundColor: '#C0CF3A'
});

var view04 = Titanium.UI.createView({
	height: 80,
	width: 40,
	top: 100,
	left: 120,
	backgroundColor: '#0084B0'
});


win.add(view01);
win.add(view02);
win.add(view03);
win.add(view04);

win.open();


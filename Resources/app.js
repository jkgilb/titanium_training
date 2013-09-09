var win = Titanium.UI.createWindow({
	title: 'Image View',
	backgroundColor: 'purple',
	exitOnClose: true
});

var imageView01 = Titanium.UI.createImageView({
	image: "images/mail-logo.png",
	height: 20,
	width: 29,
	top: 24
});

var imageView02 = Titanium.UI.createImageView({
	image: "images/mail-logo.png",
	height: 200,
	width: 200,
	top: 50
});

var imageView03 = Titanium.UI.createImageView({
	image: "http://hss-prod.hss.aol.com/hss/storage/adam/ae9f26051ac5d8decf899f2101773b22/Jaguar-C-X17-studio01-opt.jpg",
	height: 200,
	// width: 200,
	bottom: 0
});


win.add(imageView01);
win.add(imageView02);
win.add(imageView03);

win.open();


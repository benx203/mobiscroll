fis.match('*.{json,txt,md}', {
    release: false
});

fis.match('::packager', {
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
});

fis.match('mobiscroll.zepto.js', {
    packOrder: -101
})

fis.match('mobiscroll.core.js', {
    packOrder: -100
})

fis.match('mobiscroll.frame.js', {
    packOrder: -99
})

fis.match('mobiscroll.scroller.js', {
    packOrder: -98
})

fis.match('mobiscroll.util.datetime.js', {
    packOrder: -97
})

fis.match('mobiscroll.datetimebase.js', {
    packOrder: -96
})

fis.match('mobiscroll.datetime.js', {
    packOrder: -95
})

fis.match('mobiscroll.select.js', {
    packOrder: -94
})

fis.match('mobiscroll.listbase.js', {
    packOrder: -93
})

fis.match('mobiscroll.image.js', {
    packOrder: -92
})

fis.match('mobiscroll.treelist.js', {
    packOrder: -91
})


fis.match('*.js', {
    optimizer: fis.plugin('uglify-js'),
    packTo: '/mobiscroll.min.js',
    release: './mobiscroll.min.js',
    url: './mobiscroll.min.js'
});

fis.match('*.{css,less}', {
    optimizer: fis.plugin('clean-css'),
    packTo: '/mobiscroll.min.css',
    release: './mobiscroll.min.css',
    url: './mobiscroll.min.css'
});

fis.match('index.html', {
    release: '/index.html'
});


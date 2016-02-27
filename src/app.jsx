var React = require('react');
var ThumbnailList = require('./thumbnail-list')

var options = {
    thumbnailData: [
        {
            title: 'See Tutorials',
            number: 12,
            header: 'Learn React',
            description: 'alksjdlkasjdlkajsdlaks',
            imgUrl: 'https://facebook.github.io/react/img/logo.svg'
        }, {
            title: 'See Tutorials',
            number: 25,
            header: 'Learn Gulp',
            description: 'Gulp will speed you developement workflow',
            imgUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
        }
    ]
}

console.log('key');

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));

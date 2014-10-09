var profileTab = require('../profileTab');

var $ = window.$;
var _ = window._;

var profiles = [
{
  name: ['Matthew', 'Branthwaite']
}, 
{
  name: ['Outraged', 'Potato']
}, 
{
  name: ['Other', 'GUY'],
  imgUrl: '/backgroundImg.JPG'
}];

$('body').append(
  profileTab.getTabs($, _, profiles)
);
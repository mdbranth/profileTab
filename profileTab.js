var profilePicture = require('profilePicture');

module.exports.getTabs = getProfileTabs;

function getProfileTabs($, _, profiles) {
  var headers = [];
  var bodies = [];
  for (var i = 0; i < profiles.length; i++) {
    headers.push(getTabHeader($, _, i, profiles[i]));
    bodies.push(getTabBody($, _, i, profiles[i]));
  }

  var elt = $('<div>', {'class': 'ef-profile-tabs'}).append(
    $('<div>', {'class': 'ef-tab-headers'}).append(headers),
    $('<div>', {'class': 'ef-tab-bodies'}).append(bodies)
  ).click(onClick);
  return elt;

  function onClick(ee) {
    var target = $(ee.target);

    if (target.closest('.ef-tab-head').length) {
      ee.preventDefault();
      var tabHead = target.closest('.ef-tab-head');
      var tabNum = tabHead.attr('data-tab-num');
      selectTab($, _, tabNum);
    }
  }
}

function getTabHeader($, _, num, profile) {
  return profilePicture.get($, _, profile).addClass('ef-tab-head').attr('data-tab-num', num);
}

function getTabBody($, _, num, profile) {
  var elt = $('<div>', {'class': 'ef-tab-body', 'data-tab-num': num, 'style': num == 0 && 'display: block' || ''}).on('hide', onHide).on('show', onShow);
  return elt;

  function onHide() {
    elt.css('display', 'none');
  }

  function onShow() {
    elt.css('display', 'block');
  }
}

function selectTab($, _, num) {
  $('.ef-tab-body').trigger('hide');
  $('.ef-tab-body[data-tab-num=' + num + ']').trigger('show');
}

'use strict';

const index = require('./index-5e8c9051.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = async (menu) => {
  const menuEl = await index.menuController.get(menu);
  return !!(menuEl && (await menuEl.isActive()));
};

exports.updateVisibility = updateVisibility;

//# sourceMappingURL=menu-toggle-util-d479d88d.js.map
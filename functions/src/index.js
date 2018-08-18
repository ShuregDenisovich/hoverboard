import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

import saveUserData from './save-user-data';
import sendGeneralNotification from './notifications';
import scheduleNotifications from './schedule-notifications';
import optimizeImages from './optimize-images';
import prerender from './prerender';

admin.initializeApp();

export {
  saveUserData,
  sendGeneralNotification,
  scheduleNotifications,
  optimizeImages,
  prerender,
}

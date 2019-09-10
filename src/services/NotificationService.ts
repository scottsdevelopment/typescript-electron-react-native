import PushNotification from 'react-native-push-notification';

interface SendNotificationOptions {
    title?: string,
    message: string,
}

export const SendNotification = (options: SendNotificationOptions) => {
    if (options.title === undefined) {
        options.title = '';
    }
    if (typeof Notification === 'function') {
        const notificationOptions: NotificationOptions =  {
            body: options.message,
            ...options
        };
        
        new Notification(options.title, notificationOptions);
    } else {
        PushNotification.localNotification({
            ...options
        });
    }
}
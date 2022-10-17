function getContainer() {
    return document.querySelector('.notify-container');
}

function alertTemplate(msg, className, index) {
    return `
    <div class='alert ${className}' data-index='${index}'>
    ${msg}
    </div>
    `;
}

function notifyContainer() {
    return `
        <div class="notify-container" style="position: fixed; top: 10px; left: 10px; z-index: 1;"></div>
    `;
}

function createNotifyContainer() {
    const template = notifyContainer();
    document.body.insertAdjacentHTML('afterbegin', template);
}

function getAlertIndex() {
    return document.querySelectorAll('.notify-container.alert').length;
}

/**
 * Function notify. Show notification message
 * @param {Object} settings
 * @param {String} settings.msg
 * @param {String} settings.className
 * @param {Number} settings.timeout
 */
export function notify(
    { msg = 'Info message',
    className = 'alert-info',
    timeout = 3000 } = {}) {
    
    if (!getContainer()) {
      createNotifyContainer();
    }

    const index = getAlertIndex();
    const template = alertTemplate(msg, className, index);
    const container = getContainer();

    container.insertAdjacentHTML('afterbegin', template);

    setTimeout(() => removeNotify(index), timeout);
}

export function removeNotify(index) {
    let alert;
    if (index === undefined) {
        alert = document.querySelector('.notify-container .alert');
    } else {
        alert = document.querySelector(`.notify-container .alert[data-index="${index}"]`);
    }

    if (!alert) {
        console.warn('Alert not found');
        return;
    }

    const container = getContainer();
    container.removeChild(alert);
     
}
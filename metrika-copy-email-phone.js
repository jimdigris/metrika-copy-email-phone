/* цель метрики на копирование почты и телефона */
(function () {
    let phones = Array.from(document.querySelectorAll('.k-copyphone'));
    let emails = Array.from(document.querySelectorAll('.k-copymail'));
    let counter = 50111713;

    phones.forEach((item) => { item.addEventListener('copy', copyPhone); });
    emails.forEach((item) => { item.addEventListener('copy', copyEmail); });
    emails.forEach((item) => { item.addEventListener('contextmenu', contextMenu); });

    function copyPhone() { ym(counter, 'reachGoal', 'phone_copy'); return true; }
    function copyEmail() { ym(counter, 'reachGoal', 'email_copy'); return true; }
    function contextMenu() { ym(counter, 'reachGoal', 'contextmenu_email'); return true; }
})();
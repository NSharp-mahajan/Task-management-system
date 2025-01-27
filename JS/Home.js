function showNotification() {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        const notification = new Notification("Task Manager", {
            body: "You have a new task!",
            icon: "path/to/icon.png" 
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                const notification = new Notification("Task Manager", {
                    body: "You have a new task!",
                    icon: "path/to/icon.png" 
                });
            }
        });
    }
}



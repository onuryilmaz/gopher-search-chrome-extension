chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.storage.local.get("active", function(item) {

        if (item.active == "true") {
            chrome.storage.local.set({
                "active": "false"
            }, function() {
                chrome.browserAction.setIcon({
                    path: "gopher-fade.png"
                });

            });

        } else {
            chrome.storage.local.set({
                "active": "true"
            }, function() {
                chrome.browserAction.setIcon({
                    path: "gopher.png"
                });

            })
        }
    });
});
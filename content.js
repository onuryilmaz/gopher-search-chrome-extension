const becomeGopher = function() {
    chrome.storage.local.get("active", function(item) {

        if (item.active != "false") {
            const searchbox = [...document.getElementsByName('q')];            
            const reg = new RegExp("\\b" + "go" + "\\b");
            searchbox.forEach(function(sb) {
                if (reg.test(sb.value) && !sb.value.includes("golang")) {
                    sb.value = sb.value.replace(reg, "golang");
                    document.getElementsByClassName('tsf').tsf.submit();
                }
            });
        }
    });
}

$('input[name=q]').change(function() {becomeGopher(); });

becomeGopher();
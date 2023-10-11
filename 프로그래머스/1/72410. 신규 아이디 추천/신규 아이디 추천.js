function solution(new_id) {
    var answer = '';
    var lower = new_id.toLowerCase();
    var lv2 = lower.match(/[a-z0-9-_.]/g).join('')
    var lv3 = lv2.replace(/\.+/g, '.')
    var lv4 = lv3.replace(/^\.|\.$/g, '')
    var lv5 = lv4.length === 0 ? 'a' : lv4
    var lv6 = lv5
    if(lv6.length >= 16) {
        lv6 = lv5.slice(0,15).replace(/\.+$/g,'')
    }
    if(lv6.length <= 2) {
        var last = lv6.slice(-1)
        for(let i=lv6.length; i<3; i++) {
            lv6 += last
        }
    }
    return lv6;
}
/**
 * Created by uv2sun on 15/6/4.
 */


module.exports = {
    propertyCopy: function (src, dist) {
        if (!Object.keys(src))return;
        var i;
        var arr = Object.keys(src);
        for (i = 0; i < arr.length; i++) {
            if (typeof src[arr[i]] == 'object') {
                dist[arr[i]] = {};
                this.propertyCopy(src[arr[i]], dist[arr[i]]);
            } else {
                dist[arr[i]] = src[arr[i]];
            }
        }
        return dist;
    }
};
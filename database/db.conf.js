/**
 * Created by uv2sun on 15/6/4.
 */

function DBConf(type) {
    this.type = type;
}

DBConf.prototype.TEST_DB = DBConf.TEST_DB  = "TEST";
DBConf.prototype.PRODUCT_DB = DBConf.PRODUCT_DB = 'PRODUCT';
DBConf.prototype.TEST_CONF = {
    server: 'localhost',
    port: '2002',
    database: 'test'
};
DBConf.prototype.PRODUCT_CONF = {
    server: 'localhost',
    port: '2002',
    database: 'product'
};


DBConf.prototype.getDBUrl = function () {
    if( this.type ){
        return 'mongodb://'
            + this[this.type+'_CONF'].server
            + ':'
            + this[this.type+'_CONF'].port
            + '/'
            + this[this.type+'_CONF'].database;
    }else{
        throw new Error('db type is undefined?:'+this.type);
    }
};

module.exports = DBConf;


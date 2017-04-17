
module.exports = function(sequelize, DataTypes) {
    var SessionEnrollment = sequelize.define('SessionEnrollment', {},
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false
            // 'classMethods': {
            //     'associate': function(models) {
            //         SessionEnrollment.belongsTo(models.Session, {"through":});
            //         SessionEnrollment.belongsTo(models.User);
            //     }
            // }
        
        });

    return SessionEnrollment;
}
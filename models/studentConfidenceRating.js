module.exports = function(sequelize, DataTypes) {
    var StudentConfidenceRating = sequelize.define('StudentConfidenceRating', {
        'id': {
            'type': DataTypes.INTEGER.UNSIGNED,
            'allowNull': false,
            'unique': true,
            'primaryKey': true,
            'autoIncrement': true
        },
        'rubricItemNum': {
            'type': DataTypes.INTEGER.UNSIGNED,
            'allowNull': false
        },
        'rating': {
            'type': DataTypes.INTEGER.UNSIGNED,
            'allowNull': false
        },
         'calibrationWeight': {
            'type': DataTypes.FLOAT,
            'allowNull': false
        }
    }, {
        'classMethods': {
            'associate': function(models) {
                StudentConfidenceRating.belongsTo(models.User);
                StudentConfidenceRating.belongsTo(models.Exercise);
            }
        }
    });

    return StudentConfidenceRating;
};

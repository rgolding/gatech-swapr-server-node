module.exports = function(sequelize, DataTypes) {
    var Course = sequelize.define('Course', {
        'id': {
            'type': DataTypes.INTEGER,
            'allowNull': false,
            'unique': true,
            'primaryKey': true,
            'autoIncrement': true
        },
        'name': {
            'type': DataTypes.STRING,
            'allowNull': false,
            'unique': true,
            'validate': { 'notEmpty': true }
        }
    }

        // I don't want createdAt or updatedAt
        
    

    ,{
        timestamps: false,

        'classMethods': {
            'associate': function(models) {
                Course.belongsTo(models.Institute);
            }
        }
    
    });

    return Course;
};

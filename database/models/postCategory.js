const { DataTypes } = require('sequelize');

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, _DataTypes) => {
  const PostCategories = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
      tableName: 'PostCategories',
    },
  );

  PostCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId', otherKey: 'categoryId', through: PostCategories, as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId', otherKey: 'postId', through: PostCategories, as: 'BlogPost',
    });
  };

  return PostCategories;
};

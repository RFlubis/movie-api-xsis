'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert(
      'Movies',
      [
        {
          title: 'Apple AirPods',
          description:
            'Apple AirPods are wireless earbuds that seamlessly connect to your devices via Bluetooth. They provide high-quality audio and come with a charging case for easy storage and on-the-go charging.',
          rating: 9.0,
          image: 'https://www.apple.com/airpods',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Dark Knight',
          description:
            'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
          rating: 9.0,
          image:
            'https://www.imdb.com/title/tt0468569/mediaviewer/rm1664152832',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Inception',
          description:
            'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
          rating: 8.8,
          image: 'https://www.imdb.com/title/tt1375666/mediaviewer/rm325436160',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Shawshank Redemption',
          description:
            'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          rating: 9.3,
          image:
            'https://www.imdb.com/title/tt0111161/mediaviewer/rm2800605952',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pulp Fiction',
          description:
            'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
          rating: 8.9,
          image:
            'https://www.imdb.com/title/tt0110912/mediaviewer/rm2007185152',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Godfather',
          description:
            'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
          rating: 9.2,
          image:
            'https://www.imdb.com/title/tt0068646/mediaviewer/rm3594508800',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more movie records here
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Movies', null, {});
  },
};

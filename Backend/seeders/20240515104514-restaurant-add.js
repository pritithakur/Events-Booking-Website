'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('restaurants', [
      {
        restaurant_name: 'Le Méridien Gurgaon, Delhi NCR',
        url: 'https://www.restaurantA.com',
        city_id:1,
        location_name: 'Location A',
        // event_id: 1, // Replace with the actual event ID if needed
        latitude: 28.481355069858797, // Replace with actual latitude value
        longitude: 77.10779511534255, // Replace with actual longitude value
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        restaurant_name: 'The Shandar restaurant',
        url: 'https://www.restaurantB.com',
        city_id:1,
        location_name: 'Location B',
        // event_id: 2, // Replace with the actual event ID if needed
        latitude: 28.494358758535284, // Replace with actual latitude value
        longitude: 77.10530074502591, // Replace with actual longitude value
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        restaurant_name: 'The rice bowl',
        url: 'https://www.restaurantA.com',
        city_id:3,
        location_name: 'banglore',
        // event_id: 1, // Replace with the actual event ID if needed
        latitude: 13, // Replace with actual latitude value
        longitude: 78, // Replace with actual longitude value
        created_at: new Date(),
        updated_at: new Date()
      },
      
      {
        restaurant_name: 'AMA CAfe ',
        url: 'https://www.restaurantB.com',
        city_id:1,
        location_name: ' AMA Cafe, House no. 6, 1st Floor, Majnu-ka-tilla, New Aruna Nagar, New Delhi, Delhi 110054',
        // event_id: 2, // Replace with the actual event ID if needed
        latitude: 28.71260766996972, // Replace with actual latitude value
        longitude: 77.23006108918806, // Replace with actual longitude value
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        restaurant_name: 'Yauatcha Mumbai',
        url: 'https://www.restaurantB.com',
        city_id:2,
        location_name: ' Yauatcha Mumbai, Raheja Tower, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051',
        // event_id: 2, // Replace with the actual event ID if needed
        latitude: 19.066572746357988, // Replace with actual latitude value
        longitude: 72.86329686027865, // Replace with actual longitude value
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('restaurants', null, {});
  }
};

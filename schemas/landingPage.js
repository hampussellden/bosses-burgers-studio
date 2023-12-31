// schemas/landingPage.js
export default {
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Site Title',
        type: 'string',
      },
      {
        name: 'moto',
        title: 'Our Moto',
        type: 'string',
      },
      {
        name: 'burgerOfTheMonth',
        title: 'Burger Of The Month',
        type: 'reference',
        to: [{type: 'hamburger'}]
      },
      {
        name: 'monthlyMealPrice',
        title: 'Monthly Meal Price',
        description: 'Price for a meal with the montly burger',
        type: 'number',
      }
    ],
  }
  
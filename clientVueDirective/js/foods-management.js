Vue.component('foods-management', {
  template: `
    <div>
      <h2 class="mt-2 mx-5" style="color: grey">Foods</h2>
      <hr class="bg-dark mt-2 mx-5" id="foods">
      <food-list-card :attributes="attributes"  :foods="data"> </food-list-card>
    </div>
    `,
  components: {

  },
  data() {
    return {
      data: [
        {
          id: 1,
          name: 'bakso',
          category: 'Food',
          description: 'Bakso Malang mantab enaaaak! dijamin nyesel deh ngga nyobain',
          price: 12000,
          qty: 12,
          img: 'https://anekaresepnusantara.info/wp-content/uploads/2017/03/Resep-Bakso-Urat-Sapi-Spesial-dan-Mantap.jpg'
        },
        {
          id: 2,
          name: 'Nasi Goreng',
          category: 'Food',
          description: 'Nasi Goreng Makjambrong, mantaaab!',
          price: 15000,
          qty: 10,
          img: 'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/944501ee-4a97-47ee-864a-1d66bbe5bd29.jpg'
        },
        {
          id: 3,
          name: 'Bubur Ayam',
          category: 'Food',
          description: 'Bubur ayam cirebon yang di buat dengan bumbu ayam pilihan',
          price: 10000,
          qty: 13,
          img: 'http://www.damniloveindonesia.com/image/catalog/explore_indonesia/Artikel/Taste/bubur/bubur_opening.jpg'
        }
      ],
      attributes: {
        carts: [],
        itemBuy: '',
        buyQty: 0,
        notes: '',
      }
    }
  },
  methods: {
    
  }
})
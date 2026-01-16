import honda from '@/assets/images/vehicles/honda.webp'

export const useProducts = () => {
  const products = ref([
    {
      id: 1,
      name: 'Yamaha FZ',
      model: '2023',
      price: '4,50,000',
      details: '150cc engine, ABS braking, street bike',
      image: 'honda'

    },
    {
      id: 2,
      name: 'Honda City',
      model: '2022',
      price: '55,00,000',
      details: 'Sedan, petrol, automatic transmission',
      image: '/images/vehicles/honda.jpg'
    },
    {
      id: 3,
      name: 'Tesla Model 3',
      model: '2024',
      price: '1,20,00,000',
      details: 'Electric vehicle, autopilot, long range',
      // image: '/assets/images/vehicles/tesla.webp'
    },
    {
    id: 4,
    name: 'Suzuki Gixxer',
    model: '2023',
    price: '4,20,000',
    details: '155cc engine, sporty design, ABS',
    image: '/assets/images/vehicles/suzuki-gixxer.webp'
  },
  {
    id: 5,
    name: 'Bajaj Pulsar NS200',
    model: '2024',
    price: '4,75,000',
    details: '200cc engine, liquid cooled, dual ABS',
    image: '/assets/images/vehicles/pulsar-ns200.webp'
  },
  {
    id: 6,
    name: 'Royal Enfield Classic 350',
    model: '2023',
    price: '6,50,000',
    details: '350cc engine, retro styling, disc brakes',
    image: '/assets/images/vehicles/re-classic-350.webp'
  },
  {
    id: 7,
    name: 'KTM Duke 200',
    model: '2024',
    price: '7,20,000',
    details: '200cc engine, lightweight chassis, ABS',
    image: '/assets/images/vehicles/ktm-duke-200.webp'
  },
  {
    id: 8,
    name: 'TVS Apache RTR 160',
    model: '2023',
    price: '3,90,000',
    details: '160cc engine, racing performance, ABS',
    image: '/assets/images/vehicles/tvs-apache-160.webp'
  },
  {
    id: 9,
    name: 'Hyundai Creta',
    model: '2023',
    price: '65,00,000',
    details: 'SUV, petrol/diesel, panoramic sunroof',
    image: '/assets/images/vehicles/hyundai-creta.webp'
  },
  {
    id: 10,
    name: 'Toyota Corolla',
    model: '2022',
    price: '50,00,000',
    details: 'Sedan, hybrid option, reliable mileage',
    image: '/assets/images/vehicles/toyota-corolla.webp'
  },
  {
    id: 11,
    name: 'Kia Seltos',
    model: '2024',
    price: '68,00,000',
    details: 'SUV, smart features, turbo engine',
    image: '/assets/images/vehicles/kia-seltos.webp'
  },
  {
    id: 12,
    name: 'MG ZS EV',
    model: '2024',
    price: '75,00,000',
    details: 'Electric SUV, long range, fast charging',
    image: '/assets/images/vehicles/mg-zs-ev.webp'
  },
  {
    id: 13,
    name: 'Tata Nexon EV',
    model: '2024',
    price: '70,00,000',
    details: 'Electric SUV, 5-star safety, connected tech',
    image: '/assets/images/vehicles/tata-nexon-ev.webp'
  },
  {
    id: 14,
    name: 'Mahindra Thar',
    model: '2023',
    price: '78,00,000',
    details: '4x4 SUV, off-road ready, diesel engine',
    image: '/assets/images/vehicles/mahindra-thar.webp'
  },
  {
    id: 15,
    name: 'Ford Ranger',
    model: '2023',
    price: '95,00,000',
    details: 'Pickup truck, powerful engine, 4WD',
    image: '/assets/images/vehicles/ford-ranger.webp'
  },
  {
    id: 16,
    name: 'BMW X5',
    model: '2024',
    price: '2,10,00,000',
    details: 'Luxury SUV, premium interior, AWD',
    image: '/assets/images/vehicles/bmw-x5.webp'
  },
  {
    id: 17,
    name: 'Audi A6',
    model: '2023',
    price: '1,90,00,000',
    details: 'Luxury sedan, quattro, digital cockpit',
    image: '/assets/images/vehicles/audi-a6.webp'
  },
  {
    id: 18,
    name: 'Mercedes-Benz C-Class',
    model: '2024',
    price: '1,85,00,000',
    details: 'Luxury sedan, advanced safety, comfort ride',
    image: '/assets/images/vehicles/mercedes-c-class.webp'
  },
  {
    id: 19,
    name: 'Tesla Model Y',
    model: '2024',
    price: '1,50,00,000',
    details: 'Electric SUV, autopilot, long range',
    image: '/assets/images/vehicles/tesla-model-y.webp'
  },
  {
    id: 20,
    name: 'Nissan Leaf',
    model: '2023',
    price: '60,00,000',
    details: 'Electric hatchback, eco-friendly, compact',
    image: '/assets/images/vehicles/nissan-leaf.webp'
  },
  {
    id: 21,
    name: 'Volkswagen Tiguan',
    model: '2023',
    price: '72,00,000',
    details: 'SUV, turbo petrol, German engineering',
    image: '/assets/images/vehicles/vw-tiguan.webp'
  },
  {
    id: 22,
    name: 'Skoda Octavia',
    model: '2022',
    price: '58,00,000',
    details: 'Sedan, turbo engine, premium comfort',
    image: '/assets/images/vehicles/skoda-octavia.webp'
  },
  {
    id: 23,
    name: 'Jeep Compass',
    model: '2023',
    price: '70,00,000',
    details: 'SUV, rugged build, off-road capability',
    image: '/assets/images/vehicles/jeep-compass.webp'
  }
  ])

  const getProductById = (id) =>
    products.value.find(p => p.id === Number(id))

  return { products, getProductById }
}

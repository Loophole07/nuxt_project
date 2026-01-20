import { ref, watch } from 'vue'

const STORAGE_KEY = 'users'


const users = ref([])

const defaultUsers = [
          { id: 1, name: 'Samip Rawal', email: 'samip@example.com', phone: '9800000000', address: 'Tikathali, Lalitpur' },
  { id: 2, name: 'Bindeshwori Rawal', email: 'bindu@example.com', phone: '9811111111', address: 'Sivanagar' },
  { id: 3, name: 'Suman Rawal', email: 'suman@example.com', phone: '9822222222', address: 'Baneshwor, Kathmandu' },
  { id: 4, name: 'Anita Sharma', email: 'anita@example.com', phone: '9833333333', address: 'Kalanki, Kathmandu' },
  { id: 5, name: 'Ramesh Karki', email: 'ramesh@example.com', phone: '9844444444', address: 'Pokhara' },
  { id: 6, name: 'Sita Thapa', email: 'sita@example.com', phone: '9855555555', address: 'Butwal' },
  { id: 7, name: 'Hari Adhikari', email: 'hari@example.com', phone: '9866666666', address: 'Bharatpur' },
  { id: 8, name: 'Nirmala KC', email: 'nirmala@example.com', phone: '9877777777', address: 'Dang' },
  { id: 9, name: 'Bikash Shrestha', email: 'bikash@example.com', phone: '9888888888', address: 'Patan' },
  { id: 10, name: 'Puja Joshi', email: 'puja@example.com', phone: '9899999999', address: 'Bhaktapur' },

  { id: 11, name: 'Amit Chaudhary', email: 'amit@example.com', phone: '9801010101', address: 'Birgunj' },
  { id: 12, name: 'Sunita Yadav', email: 'sunita@example.com', phone: '9802020202', address: 'Janakpur' },
  { id: 13, name: 'Kiran Lama', email: 'kiran@example.com', phone: '9803030303', address: 'Bouddha, Kathmandu' },
  { id: 14, name: 'Maya Gurung', email: 'maya@example.com', phone: '9804040404', address: 'Lamjung' },
  { id: 15, name: 'Dipesh Bista', email: 'dipesh@example.com', phone: '9805050505', address: 'Dhangadhi' },
  { id: 16, name: 'Sabina Rai', email: 'sabina@example.com', phone: '9806060606', address: 'Ilam' },
  { id: 17, name: 'Nabin Poudel', email: 'nabin@example.com', phone: '9807070707', address: 'Baglung' },
  { id: 18, name: 'Prakash Shah', email: 'prakash@example.com', phone: '9808080808', address: 'Biratnagar' },
  { id: 19, name: 'Alisha Pandey', email: 'alisha@example.com', phone: '9809090909', address: 'Chabahil, Kathmandu' },
  { id: 20, name: 'Rijan Shahi', email: 'rijan@example.com', phone: '9810101010', address: 'Surkhet' },

  { id: 21, name: 'Sagar Khadka', email: 'sagar@example.com', phone: '9811110001', address: 'Gorkha' },
  { id: 22, name: 'Laxmi Neupane', email: 'laxmi@example.com', phone: '9812121212', address: 'Parbat' },
  { id: 23, name: 'Manish Mahat', email: 'manish@example.com', phone: '9813131313', address: 'Kirtipur' },
  { id: 24, name: 'Rita Basnet', email: 'rita@example.com', phone: '9814141414', address: 'Hetauda' },
  { id: 25, name: 'Suresh Tamang', email: 'suresh@example.com', phone: '9815151515', address: 'Sindhupalchok' },
  { id: 26, name: 'Anup Acharya', email: 'anup@example.com', phone: '9816161616', address: 'Dhulikhel' },
  { id: 27, name: 'Karuna Bhandari', email: 'karuna@example.com', phone: '9817171717', address: 'Nawalparasi' },
  { id: 28, name: 'Roshan Oli', email: 'roshan@example.com', phone: '9818181818', address: 'Dang' },
  { id: 29, name: 'Sneha Shrestha', email: 'sneha@example.com', phone: '9819191919', address: 'New Road, Kathmandu' },
  { id: 30, name: 'Bibek Gautam', email: 'bibek@example.com', phone: '9820202020', address: 'Balaju, Kathmandu' }
]


if (process.client && users.value.length === 0) {
  const saved = localStorage.getItem(STORAGE_KEY)

  users.value = saved
    ? [...defaultUsers, ...JSON.parse(saved)]
    : defaultUsers
}


if (process.client) {
  watch(
    users,
    (val) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    },
    { deep: true }
  )
}

export const useUsers = () => {
  const addUser = (user) => {
    users.value.push({ ...user, id: Date.now() })
  }

  const getUserById = (id) =>
    users.value.find(u => u.id === Number(id))

  const updateUser = (updatedUser) => {
    const index = users.value.findIndex(u => u.id === updatedUser.id)
    if (index !== -1) users.value[index] = updatedUser
  }

  const deleteUser = (id) => {
    users.value = users.value.filter(u => u.id !== id)
  }

  return {
    users,
    addUser,
    getUserById,
    updateUser,
    deleteUser
  }
}

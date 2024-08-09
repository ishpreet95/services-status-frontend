export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '9f72a112',
    amount: 75.5,
    status: 'success',
    email: 'johndoe@example.com',
  },
  {
    id: 'b3d159e7',
    amount: 200,
    status: 'failed',
    email: 'alice@company.com',
  },
  {
    id: '7d2efb91',
    amount: 50,
    status: 'pending',
    email: 'bob@mail.org',
  },
  {
    id: '63a1f0c8',
    amount: 300.25,
    status: 'processing',
    email: 'carol@business.net',
  },
  {
    id: 'e9f207a4',
    amount: 175,
    status: 'success',
    email: 'david@example.io',
  },
  {
    id: '1c8d3b2e',
    amount: 90,
    status: 'failed',
    email: 'eve@startup.com',
  },
  {
    id: 'a4e8f2c1',
    amount: 150.75,
    status: 'pending',
    email: 'frank@tech.co',
  },
  {
    id: '5d7b3e9a',
    amount: 80,
    status: 'processing',
    email: 'grace@example.net',
  },
  {
    id: '2f6c9d81',
    amount: 220.5,
    status: 'success',
    email: 'henry@corporation.com',
  },
  {
    id: '8e1a7f3b',
    amount: 45.25,
    status: 'failed',
    email: 'irene@startup.io',
  },
  {
    id: 'c0d4b9a6',
    amount: 310,
    status: 'processing',
    email: 'jack@enterprise.org',
  },
]

export type TServiceStatusTypes = 'up' | 'down' | 'fixing'

export const serviceKeyName = 'Service Name'

export type TServiceRegions = {
  [serviceKeyName]: string
  'region 1': TServiceStatusTypes
  'region 2': TServiceStatusTypes
  'region 3': TServiceStatusTypes
  'region 4': TServiceStatusTypes
  'region 5': TServiceStatusTypes
}

export type TServiceStatus = TServiceRegions

export const dummyServiceStatusData: TServiceStatus[] = [
  {
    [serviceKeyName]: 'Authentication Service',
    'region 1': 'up',
    'region 2': 'down',
    'region 3': 'up',
    'region 4': 'down',
    'region 5': 'fixing',
  },
  {
    [serviceKeyName]: 'Database Service',
    'region 1': 'up',
    'region 2': 'up',
    'region 3': 'up',
    'region 4': 'up',
    'region 5': 'up',
  },
  {
    [serviceKeyName]: 'Storage Service',
    'region 1': 'down',
    'region 2': 'down',
    'region 3': 'down',
    'region 4': 'fixing',
    'region 5': 'fixing',
  },
  {
    [serviceKeyName]: 'API Gateway',
    'region 1': 'fixing',
    'region 2': 'up',
    'region 3': 'down',
    'region 4': 'up',
    'region 5': 'down',
  },
  {
    [serviceKeyName]: 'Notification Service',
    'region 1': 'up',
    'region 2': 'fixing',
    'region 3': 'fixing',
    'region 4': 'up',
    'region 5': 'up',
  },
  {
    [serviceKeyName]: 'Payment Processing',
    'region 1': 'down',
    'region 2': 'up',
    'region 3': 'up',
    'region 4': 'down',
    'region 5': 'up',
  },
  {
    [serviceKeyName]: 'Search Service',
    'region 1': 'fixing',
    'region 2': 'fixing',
    'region 3': 'fixing',
    'region 4': 'fixing',
    'region 5': 'fixing',
  },
  {
    [serviceKeyName]: 'User Management',
    'region 1': 'up',
    'region 2': 'down',
    'region 3': 'down',
    'region 4': 'up',
    'region 5': 'down',
  },
  {
    [serviceKeyName]: 'Content Delivery Network',
    'region 1': 'down',
    'region 2': 'down',
    'region 3': 'up',
    'region 4': 'fixing',
    'region 5': 'up',
  },
  {
    [serviceKeyName]: 'Analytics Service',
    'region 1': 'fixing',
    'region 2': 'up',
    'region 3': 'up',
    'region 4': 'up',
    'region 5': 'down',
  },
  {
    [serviceKeyName]: 'Machine Learning Engine',
    'region 1': 'up',
    'region 2': 'up',
    'region 3': 'down',
    'region 4': 'down',
    'region 5': 'fixing',
  },
  {
    [serviceKeyName]: 'Logging Service',
    'region 1': 'down',
    'region 2': 'fixing',
    'region 3': 'up',
    'region 4': 'up',
    'region 5': 'up',
  },
]

// =====================
// Professionals
// =====================
export const professionals = [
  {
    id: 1,
    name: 'Anita Sharma',
    image: 'https://media.istockphoto.com/id/1205299877/photo/portrait-of-confident-woman-in-sari.jpg?s=612x612&w=0&k=20&c=JkYeRIOYybTIsSw8QLZklJvSKjPFLuhZSgaYSIbAhDI=',
    category: 'Home Services',
    rating: 4.8,
    reviews: 124,
    experience: '8 years',
    location: 'Mumbai, MH',
    price: 500,
    description: 'Experienced home service professional handling plumbing, repairs, and maintenance.',
    services: ['Plumbing Repair', 'Leak Fixing', 'Pipe Installation', 'Home Maintenance'],
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    image: 'https://media.istockphoto.com/id/589544922/photo/doing-business-with-his-brain.jpg?s=612x612&w=0&k=20&c=5WdQs54XbpQI6kd0uFFe5aLJ44QH3DpDEmBda20u60A=',
    category: 'Technology',
    rating: 4.9,
    reviews: 210,
    experience: '12 years',
    location: 'Delhi, DL',
    price: 800,
    description: 'Technology expert offering IT support and web development services.',
    services: ['IT Support', 'Website Development', 'System Setup', 'Technical Consulting'],
  },
  {
    id: 3,
    name: 'Priya Patel',
    image: 'https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=',
    category: 'Design',
    rating: 4.7,
    reviews: 89,
    experience: '5 years',
    location: 'Bangalore, KA',
    price: 700,
    description: 'Creative designer specializing in branding, UI/UX, and graphic design.',
    services: ['Logo Design', 'UI/UX Design', 'Brand Identity', 'Social Media Creatives'],
  },
  {
    id: 4,
    name: 'Vikram Singh',
    image: 'https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg',
    category: 'Writing',
    rating: 4.6,
    reviews: 67,
    experience: '10 years',
    location: 'Pune, MH',
    price: 600,
    description: 'Professional content writer and editor for blogs, websites, and marketing.',
    services: ['Content Writing', 'Blog Writing', 'Editing', 'SEO Writing'],
  },
  {
    id: 5,
    name: 'Meena Reddy',
    image: 'https://i.pravatar.cc/150?img=9',
    category: 'Business',
    rating: 4.5,
    reviews: 45,
    experience: '6 years',
    location: 'Hyderabad, TG',
    price: 1000,
    description: 'Business consultant helping startups and small businesses grow.',
    services: ['Business Consulting', 'Accounting Support', 'Financial Planning', 'Startup Guidance'],
  },
  {
    id: 6,
    name: 'Arjun Nair',
    image: 'https://media.istockphoto.com/id/1155234248/photo/fitness-instructor-standing-at-a-fitness-centre-and-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=nE6WTfZittd--4njSf3II-m54OhrbXnVIQ1NIjuHInA=',
    category: 'Health & Fitness',
    rating: 4.8,
    reviews: 156,
    experience: '9 years',
    location: 'Chennai, TN',
    price: 900,
    description: 'Certified fitness trainer offering personal training and wellness coaching.',
    services: ['Personal Training', 'Workout Plans', 'Nutrition Guidance', 'Online Coaching'],
  },
  {
    id: 7,
    name: 'Neha Verma',
    image: 'https://media.istockphoto.com/id/1311858467/photo/head-shot-portrait-attractive-young-indian-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=0QWC0t9uc6tptvQkWZxlFKK6hsnOxQBCobTfgkuNbLA=',
    category: 'Education',
    rating: 4.9,
    reviews: 132,
    experience: '11 years',
    location: 'Jaipur, RJ',
    price: 650,
    description: 'Experienced tutor providing academic and skill-based training.',
    services: ['Online Tutoring', 'Exam Preparation', 'Skill Training', 'Career Guidance'],
  },
  {
    id: 8,
    name: 'Suresh Iyer',
    image: 'https://media.istockphoto.com/id/2160830783/photo/positive-handsome-young-indian-man-head-shot-front-portrait.jpg?s=612x612&w=0&k=20&c=q8jNuQWO35W2-7luXuLdWGP2KKwKpdEUiVICJDjjku8=',
    category: 'Legal',
    rating: 4.7,
    reviews: 98,
    experience: '14 years',
    location: 'Kochi, KL',
    price: 1200,
    description: 'Legal expert offering advice, documentation, and compliance support.',
    services: ['Legal Consultation', 'Document Drafting', 'Contract Review', 'Compliance Advice'],
  },
]

// =====================
// Service Categories
// =====================
export const serviceCategories = [
  'Home Services',
  'Technology',
  'Design',
  'Writing',
  'Business',
  'Education',
  'Health & Fitness',
  'Legal',
]

// =====================
// Bookings
// =====================
export const mockBookings = [
  {
    id: 'BK001',
    professionalId: 1,
    professionalName: 'Anita Sharma',
    service: 'Plumbing Repair',
    date: '2026-03-01',
    time: '10:00 AM',
    status: 'Confirmed',
    payment: 'Card',
    amount: 500,
  },
  {
    id: 'BK002',
    professionalId: 2,
    professionalName: 'Rajesh Kumar',
    service: 'Website Development',
    date: '2026-03-05',
    time: '2:00 PM',
    status: 'Pending',
    payment: 'UPI',
    amount: 800,
  },
  {
    id: 'BK003',
    professionalId: 6,
    professionalName: 'Arjun Nair',
    service: 'Personal Training',
    date: '2026-02-20',
    time: '9:00 AM',
    status: 'Completed',
    payment: 'Cash',
    amount: 900,
  },
]

// =====================
// Users
// =====================
export const mockUsers = [
  { id: 1, name: 'Amit Gupta', email: 'amit@example.com', role: 'user', status: 'Active', joined: '2025-06-15' },
  { id: 2, name: 'Sneha Roy', email: 'sneha@example.com', role: 'user', status: 'Active', joined: '2025-08-22' },
  { id: 3, name: 'Rohan Das', email: 'rohan@example.com', role: 'user', status: 'Suspended', joined: '2025-04-10' },
  { id: 4, name: 'Kavita Joshi', email: 'kavita@example.com', role: 'user', status: 'Active', joined: '2025-11-03' },
]

// =====================
// Support Queries
// =====================
export const mockQueries = [
  { id: 'Q001', user: 'Amit Gupta', subject: 'Booking not confirmed', status: 'Open', date: '2026-02-20', priority: 'High' },
  { id: 'Q002', user: 'Sneha Roy', subject: 'Refund request', status: 'Open', date: '2026-02-18', priority: 'Medium' },
  { id: 'Q003', user: 'Rohan Das', subject: 'Professional did not show up', status: 'In Progress', date: '2026-02-15', priority: 'High' },
  { id: 'Q004', user: 'Kavita Joshi', subject: 'Unable to make payment', status: 'Resolved', date: '2026-02-10', priority: 'Low' },
]

// =====================
// Earnings
// =====================
export const mockEarnings = [
  { month: 'Sep', amount: 12000 },
  { month: 'Oct', amount: 18500 },
  { month: 'Nov', amount: 15000 },
  { month: 'Dec', amount: 22000 },
  { month: 'Jan', amount: 19500 },
  { month: 'Feb', amount: 16000 },
]
const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]

const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Development Task",
        "description": "Task related to software development.",
        "date": "2024-10-01",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Design Task",
        "description": "Creative design work.",
        "date": "2024-10-05",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "title": "Testing Task",
        "description": "Quality assurance and testing.",
        "date": "2024-10-10",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": true
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completedTask": 1,
      "failedTask": 1
    }
  },
  {
    "id": 2,
    "firstname": "Vivaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Development Task",
        "description": "Task related to software development.",
        "date": "2024-10-02",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Design Task",
        "description": "Creative design work.",
        "date": "2024-10-06",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completedTask": 0,
      "failedTask": 0
    }
  },
  {
    "id": 3,
    "firstname": "Aditya",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Research Task",
        "description": "Investigative research work.",
        "date": "2024-10-03",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "title": "Testing Task",
        "description": "Quality assurance and testing.",
        "date": "2024-10-07",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Development Task",
        "description": "Task related to software development.",
        "date": "2024-10-11",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": true
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 1
    }
  },
  {
    "id": 4,
    "firstname": "Vihaan",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Management Task",
        "description": "Task related to project management.",
        "date": "2024-10-04",
        "category": "Management",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Development Task",
        "description": "Task related to software development.",
        "date": "2024-10-08",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 0
    }
  },
  {
    "id": 5,
    "firstname": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Support Task",
        "description": "Customer support task.",
        "date": "2024-10-05",
        "category": "Support",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Testing Task",
        "description": "Quality assurance and testing.",
        "date": "2024-10-09",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "title": "Research Task",
        "description": "Investigative research work.",
        "date": "2024-10-12",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 1
    }
  }
]

export const setLocalStorage = () => {
  localStorage.setItem('admin', JSON.stringify(admin))
  localStorage.setItem('employees', JSON.stringify(employees))
}

export const getLocalStorage = () => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  const employees = JSON.parse(localStorage.getItem('employees'))
  return {admin, employees}
}

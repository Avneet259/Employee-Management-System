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
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for Task 1",
        "date": "2024-10-01",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Task 2",
        "description": "Description for Task 2",
        "date": "2024-10-05",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "title": "Task 3",
        "description": "Description for Task 3",
        "date": "2024-10-10",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": true
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for Task 1",
        "date": "2024-10-02",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Task 2",
        "description": "Description for Task 2",
        "date": "2024-10-06",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for Task 1",
        "date": "2024-10-03",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "title": "Task 2",
        "description": "Description for Task 2",
        "date": "2024-10-07",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Task 3",
        "description": "Description for Task 3",
        "date": "2024-10-11",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": true
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for Task 1",
        "date": "2024-10-04",
        "category": "Management",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Task 2",
        "description": "Description for Task 2",
        "date": "2024-10-08",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description for Task 1",
        "date": "2024-10-05",
        "category": "Support",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Task 2",
        "description": "Description for Task 2",
        "date": "2024-10-09",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "title": "Task 3",
        "description": "Description for Task 3",
        "date": "2024-10-12",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true
      }
    ]
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

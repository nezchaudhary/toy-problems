/* 
Your previous Plain Text content is preserved below:

This is just a simple shared plaintext pad, with no execution capabilities.

When you know what language you'd like to use for your interview,
simply choose it from the dropdown in the top bar.

You can also change the default language your pads are created with
in your account settings: https://coderpad.io/settings

Enjoy your interview!

We've built a web platform that powers our pharmacy and one of its core services is the Task system. A task is a single unit of work for an employee. There are many types of tasks, including but not limited to:

- responding to a patient's message (a)
- requesting a renewal from a doctor (b)
- conducting a clinical assessment (c)
- troubleshooting an insurance rejection (d) 

We want an employee to click a button and get the next task to work on using the following requirements: 

- Each employee has a role that determines the types of tasks they can complete. For example, only pharmacists can conduct clinical assessments while only billing specialists can respond to a patient question about insurance billing.
- Each task type has an expected turnaround time. For example, we want to complete  "respond to patient message" tasks within 30 minutes of being created and complete "troubleshoot insurance rejection" tasks within 3 hours of being created. An employee should get the task that is closest to missing its turnaround time.

Your challenge is to write the code for a get_next_task method that accepts an employee object and returns the correct task object for that employee. By the end, you should have running code that you can demonstrate meets the requirements with either test data or actual tests.


 */

// Employee object that has at least name and role (billing specialist, phamacist)
// tast object
  // expiration
  // task type
  // created


// task queue

//

// class Employee {
//   constructor(type) {
//     this.type = type;
//   }
// }

// class Task {
//   constructor(type, expiration) {
//     this.type = type;
//     this.createdAt = Date.now() // date
//     this.expirationTime = expiration * 1000;
//   }
// }


// // consider needing to handle changing turnaround time
// const task1 = 'Respond to User';
// const task2 = 'Renewal from Doctor';
// const task3 = 'conducting a clinical assessment';
// const task4 = 'troubleshooting an insurance rejection';


// const employee1 = {
//   role: 'Doctor',
//   tasks: [task1, task3],
// };

// const employee2 = {
//   role: 'Billing',
//   tasks: [task2, task4],
// };



// const taskQueue = {
//   [task1]: [], // they are added in the order they came in.
//   [task2]: [],
//   [task3]: [],
//   [task4]: [],
// };


// const get_next_task = (employee) => {
//   // check what tasks employee can perform
//   //
//   let time = Date.now();
//   // let task = null;
//   let queue = null;
  
//   console.log('time', time);
//     console.log('task queue', taskQueue);
  
//   employee.type.tasks.forEach(task => {
//     const currentTask = taskQueue[task][0];
//     console.log('current task', currentTask);
//     if (currentTask && currentTask.createdAt <= time) {

//       time = currentTask.createdAt;
//       queue = taskQueue[task];
//       console.log('found queue', queue);
//     }
//   });
  
//   if (queue) {
//     return queue.shift();
//   }
    
//   // return task;
  
//   // check the first task within the different tasks
//   // check createAt and allocate the one thats oldest
//   // take task off queue
//   // assign to employee
//   // return task
// }



// const respondToUser1 = new Task(task1, 1800);
// taskQueue[task1].push(respondToUser1);
// const respondToUser2 = new Task(task1, 1800);
// taskQueue[task1].push(respondToUser2);
// const respondToUser3 = new Task(task1, 1800);
// taskQueue[task1].push(respondToUser3);
// const respondToUser4 = new Task(task1, 1800);
// taskQueue[task1].push(respondToUser4);


// const renewalFromDoctor1 = new Task(task2, 3600);
// taskQueue[task2].push(renewalFromDoctor1);
// const renewalFromDoctor2 = new Task(task2, 3600);
// taskQueue[task2].push(renewalFromDoctor2);


// const doctor1 = new Employee(employee1);
// const doctor2 = new Employee(employee1);
// const doctor3 = new Employee(employee1);

// const billing1 = new Employee(employee2);
// const billing2 = new Employee(employee2);
// const billing3 = new Employee(employee2);

// console.log('result', get_next_task(doctor1));
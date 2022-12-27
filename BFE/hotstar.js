// Need to create a utility function
// which accepts array of promises (task -> got execute )
// Utility Function
// -> array of promises (task),
// there will be maxTask
// at a particular time you are executing the max Number of tasks

// [1,2,3,4,5,6]. [3]

function task(time) {
  return () =>
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(time);
      }, time);
    });
}

// UtilityFn([task(2000), task(4000), task(5000), task(6000), task(2000), task(5000)], 2)

// => ["2000", "4000", "5000", "6000", "2000"]

// [] -> input all the task
// [] ->  running tasks
//  -> if reaches limit

class TaskRunner {
  constructor(tasks, limit) {
    this.tasks = tasks;
    this.limit = limit;
    this.runningTasks = [];
    this.result = [];
    this.taskSize = 0;
  }

  executeTask() {
    for (let task of this.tasks) {
      this.addTask(task);
    }
  }

  addTask(task) {
    this.runningTasks.push(task);
    this.runTask();
  }

  runTask() {
    if (this.runningTasks.length && !this.isLimitReached()) {
      const task = this.runningTasks.shift();
      this.taskSize++;
      task().then((result) => {
        this.taskSize--;
        console.log("suucess : ", result);
        this.result.push(result);
        this.runTask();
        if (this.result.length === this.tasks.length) {
          console.log("execution finihsed : ");
        }
      });
    }
  }

  isLimitReached() {
    return this.taskSize >= this.limit;
  }
  getResult() {
    return this.result;
  }
}

let runner = new TaskRunner(
  [task(2000), task(4000), task(5000), task(6000), task(2000), task(5000)],
  2
);

// => execution: 2000
// => execution: 4000
// => done -> 2000 -> print
// => execution:
// ->=> done -> 4000 -> print

// runner.executeTask();
// const r = runner.getResult();

async function UtilityFn(tasks, concurrency) {
  const results = [];

  async function runTasks(tasksIterator) {
    for (const [index, task] of tasksIterator) {
      try {
        results[index] = await task();
      } catch (error) {
        results[index] = new Error(`Failed with: ${error.message}`);
      }
    }
  }

  const workers = new Array(concurrency).fill(tasks.entries()).map(runTasks);

  await Promise.allSettled(workers);

  return results;
}

function run() {}

(async () => {
  const a = await UtilityFn(
    [task(2000), task(3000), task(4100), task(5000), task(2001), task(5300)],
    2
  );
  console.log("result a : ", a);
})();

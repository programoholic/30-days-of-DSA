class TaskRunner {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.taskSize = 0; // how many tasks are running currently
    this.backLogItems = [];
  }
  addTask(task) {
    this.addTaskToBacklog(task);
    this.executeTask();
  }

  executeTask() {
    while (!this.isCuncurrencyReached() && this.backLogItems.length) {
      this.taskSize++;
      const task = this.getBacklogItem();
      console.log("Executing the task : ", task);
      task(() => {
        console.log("finished the task");
        this.taskSize--;
        this.taskFinished();
      });
    }
  }

  addTaskToBacklog(task) {
    this.backLogItems.push(task);
  }

  getBacklogItem() {
    if (this.backLogItems.length > 0) {
      return this.backLogItems.shift();
    }
  }

  isCuncurrencyReached() {
    return this.taskSize >= this.concurrency;
  }

  taskFinished() {
    this.executeTask();
  }
}

// function TaskRunner(concurrency /* 3 */) { }

function sampleTask(done) {
  console.log("1");
  setTimeout(() => {
    console.log("1");
    done();
  }, 10);
}
function sampleTask1(done) {
  console.log("2");
  setTimeout(() => {
    console.log("2");
    done();
  }, 10);
}
function sampleTask2(done) {
  console.log("3");
  setTimeout(() => {
    console.log("3");
    done();
  }, 10);
}
function sampleTask3(done) {
  console.log("4");
  setTimeout(() => {
    console.log("4");
    done();
  }, 10);
}
function sampleTask4(done) {
  console.log("5");
  setTimeout(() => {
    console.log("5");
    done();
  }, 10);
}
function sampleTask5(done) {
  console.log("6");
  setTimeout(() => {
    console.log("6");
    done();
  }, 10);
}
function sampleTask6(done) {
  console.log("7");
  setTimeout(() => {
    console.log("8");
    done();
  }, 10);
}

const tr1 = new TaskRunner(3);
tr1.addTask(sampleTask);
tr1.addTask(sampleTask1);
tr1.addTask(sampleTask2);
tr1.addTask(sampleTask3);
tr1.addTask(sampleTask4);
tr1.addTask(sampleTask5);
tr1.addTask(sampleTask6);

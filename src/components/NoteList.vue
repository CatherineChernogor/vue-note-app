<template>
  <div>
    <nav class="nav d-flex justify-content-between">
      <div class="">
        <span class="h3">Заметки</span>
      </div>
      <div class="">
        <button
          type="button"
          class="btn btn-danger"
          v-on="deleteTasks()"
          v-if="showDelButton"
        >
          Delete
        </button>

        <router-link to="/create"
          ><span class="btn btn-success">Add</span></router-link
        >
      </div>
    </nav>

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">name</th>
          <th scope="col">type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.message">
          <td>
            <input
              type="checkbox"
              v-model="task.shouldBeDeleted"
              v-on="changeShouldBeDeleted()"
            />
          </td>

          <td>
            <div v-if="task.isImpotrant" class="img-sm"></div>
            <div v-else></div>
          </td>

          <td>{{ task.name }}</td>

          <td>{{ task.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "NoteList",

  data() {
    return {
      showDelButton: false,
      tasks: [
        {
          name: "task1",
          type: "1",
          isImpotrant: true,
          shouldBeDeleted: false,

          text:
            "some text of task1 some text of task1 some text of task1 some text of task1 some text of task1 some text of task1 some text of task1",
        },
        {
          name: "task2",
          type: "1",
          isImpotrant: false,
          shouldBeDeleted: false,

          text:
            "some text of task2 some text of task2 some text of task2 some text of task2 some text of task1 some text of task1 some text of task1",
        },
      ],
    };
  },
  methods: {
    changeShouldBeDeleted: function () {
      let isDel = 0;
      this.tasks.forEach((task) => {
        isDel += task.shouldBeDeleted;
      });
      this.showDelButton = isDel;
      console.log(this.showDelButton);
    },
    deleteTasks: function () {
      //this.showDelButton = 0;
    },
  },
};
</script>

<style scoped>
.img-sm {
  height: 20px;
  background-image: url("../assets/exclamation-button.svg");
  background-repeat: no-repeat;
}
</style>
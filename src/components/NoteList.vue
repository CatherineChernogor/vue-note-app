<template>
  <div>
    <nav class="nav d-flex justify-content-between">
      <div class="">
        <span class="h3">Notes</span>
      </div>
      <div class="">
        <button
          type="button"
          class="btn btn-danger mr-3"
          @click="deleteTasks()"
          v-if="showDeleteButton == true"
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
        <tr v-for="task in tasks" :key="task.id">
          <td>
            <input
              type="checkbox"
              v-model="task.shouldBeDeleted"
              v-on="changeShouldBeDeleted()"
            />
          </td>

          <td>
            <div v-if="task.isImportant == true" class="img-sm"></div>
            <div v-else></div>
          </td>
          <td>
            <router-link class="" to="/view/10">{{ task.name }}</router-link>
          </td>
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
      showDeleteButton: false,
      shouldBeDeletedArray: [],
      tasks: [],
    };
  },
  mounted() {
    if (sessionStorage.tasks) {
      this.tasks = JSON.parse(sessionStorage.tasks);
    }
  },
  watch: {
    shouldBeDeletedArray: function () {
      this.showDeleteButton =
        this.shouldBeDeletedArray.length > 0 ? true : false;
    },
  },
  methods: {
    changeShouldBeDeleted: function () {
      let shouldBeDeletedIds = [];

      this.tasks.forEach((task) => {
        if (task.shouldBeDeleted) shouldBeDeletedIds.push(task.id);
      });
      this.shouldBeDeletedArray = shouldBeDeletedIds;
    },
    deleteTasks: function () {
      let ids = this.shouldBeDeletedArray;
      let result = [];

      this.tasks.forEach((element) => {
        if (ids.indexOf(element.id) == -1) result.push(element);
      });

      sessionStorage.tasks = JSON.stringify(result);
      this.tasks = result;
      this.shouldBeDeletedArray = [];
      this.showDeleteButton = false;
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
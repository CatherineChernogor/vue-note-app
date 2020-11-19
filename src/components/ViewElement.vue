<template>
  <div>
    <nav class="nav d-flex justify-content-between">
      <div class="">
        <span class="h3">Заметки - Просмотр</span>
      </div>
      <button class="btn btn-primary">Назад</button>
    </nav>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-start">
          <strong>Name: </strong> {{ task.name }}
        </h5>

        <p class="d-flex justify-content-start">
          <strong>Type: </strong> {{ task.type }}
        </p>
        <p class="d-flex justify-content-start">
          <strong>
            <span v-if="task.isImpotrant">Important</span>
            <span v-else>Not important</span>
          </strong>
        </p>
        <p class="card-text d-flex justify-content-start text-left">
          <strong>Text: </strong> {{ task.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteList",

  data() {
    return {
      task: {
        name: "task1",
        type: "1",
        isImpotrant: false,
        shouldBeDeleted: false,

        text:
          "some text of task1 some text of task1 some text of task1 some text of task1 some text of task1 some text of task1 some text of task1",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.img-sm {
  height: 20px;
  background-image: url("../assets/exclamation-button.svg");
  background-repeat: no-repeat;
}
</style>
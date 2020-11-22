<template>
  <div>
    <nav class="nav d-flex justify-content-between">
      <div class="">
        <span class="h3">Notes - View {{ task.name }}</span>
      </div>
      <router-link class="btn btn-secondary" to="/">Назад</router-link>
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
            <div v-if="task.isImportant == true">Important</div>
            <div v-else>not Important</div>
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
  name: "ViewElement",

  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    task: function () {
      let task;
      JSON.parse(sessionStorage.tasks).forEach((element) => {
        if (element.id == this.id) task = element;
      });
      return task;
    },
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
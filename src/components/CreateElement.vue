<template>
  <div>
    <nav class="nav d-flex justify-content-between">
      <div class="">
        <span class="h3">Notes - Create new</span>
      </div>
    </nav>

    <hr />

    <form>
      <div class="form-group">
        <label class="d-flex justify-content-start">Note name</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label class="d-flex justify-content-start">Note type</label>
        <select v-model="selected" class="form-control">
          <option
            v-for="option in options"
            :value="option.value"
            :key="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label class="d-flex justify-content-start">Note text</label>
        <textarea type="text" class="form-control" v-model="text" />
      </div>
      <div class="form-group d-flex justify-content-start">
        <label class="">Check if important</label>

        <input
          type="radio"
          class="form-radio-input ml-3"
          v-model="picked"
          value="y"
        />
        <label class="">yes</label>

        <input
          type="radio"
          class="form-radio-input ml-3"
          v-model="picked"
          value="n"
        /><label class="">no</label>
      </div>
      <div class="form-group d-flex justify-content-start">
        <button
          type="button"
          class="btn btn-primary d-flex justify-content-start"
          @click="onSubmit"
        >
          Submit</button
        ><router-link class="btn btn-secondary ml-3" to="/">Назад</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateElement",

  data() {
    return {
      options: [
        { text: "Один", value: 1 },
        { text: "Два", value: 2 },
        { text: "Три", value: 3 },
      ],
      tasks: [],
      counter: sessionStorage.counter,
      newTask: {},
      name: '',
      selected: '',
      text: '',
      isImportant: '',
      picked: false,
    };
  },

  methods: {
    onSubmit: function () {
      if (sessionStorage.tasks) this.tasks = JSON.parse(sessionStorage.tasks);

      this.newTask.id = sessionStorage.counter;
      this.newTask.name = this.name;
      this.newTask.type = this.selected;

      if (this.picked == "y") this.newTask.isImportant = true;
      else this.newTask.isImportant = false;

      this.newTask.text = this.text;
      this.newTask.shouldBeDeleted = false;

      this.tasks.push(this.newTask);

      sessionStorage.tasks = JSON.stringify(this.tasks);
      sessionStorage.counter = Number(sessionStorage.counter) + 1;

      this.$router.push("/");
    },
  },
};
</script>


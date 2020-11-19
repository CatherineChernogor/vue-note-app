<template>
  <div>
    <nav class="nav d-flex justify-content-between">
      <div class="">
        <span class="h3">Заметки - Создать</span>
      </div>
    </nav>

    <hr />

    <form>
      <div class="form-group">
        <label class="d-flex justify-content-start">Note name</label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label class="d-flex justify-content-start">Note type</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label class="d-flex justify-content-start">Note text</label>
        <textarea type="text" class="form-control" />
      </div>
      <div class="form-group d-flex justify-content-start">
        <label class="">Check if important</label>
        <input type="radio" class="form-radio-input ml-3" />
      </div>
      <div class="form-group d-flex justify-content-start">
        <button
          type="button"
          class="btn btn-primary d-flex justify-content-start"
        >
          Submit</button
        ><router-link class="btn btn-secondary ml-3" to="/">Назад</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NoteList",

  data() {
    return {};
  },
  methods: {},
};
</script>


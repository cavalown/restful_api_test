<template>
  <div class="container">
    <h2 class="my-5">Cavalown's Vue2 Todo List</h2>
    <!-- input new todo -->
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="What do you plan?"
        aria-label="Recipient's username"
        aria-describedby="btn-add"
        v-model="temp"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="btn-add"
        @click="addNewItem"
      >
        Add
      </button>
    </div>
    {{ temp }}
    <!-- all todo list -->
    <div class="table-responsive">
      <table class="table table-striped table-hover align-middle">
        <thead>
          <tr class="border-bottom border-black">
            <th>No.</th>
            <th>Status</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in todos" :key="index" class="">
            <td>{{ index + 1 }}</td>
            <td>
              <input
                class="form-check-input"
                type="checkbox"
                v-model="todo.isCompelete"
              />
            </td>
            <td
              :class="[todo.isCompelete ? 'text-decoration-line-through' : '']"
              class="text-start"
            >
              {{ todo.content }}
            </td>
            <td>
              <div class="row justify-content-evenly">
                <button
                  type="button"
                  class="btn btn-outline-success btn-sm col-4"
                  @click="editItem(todo.id)"
                >
                  EDIT
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm col-4"
                  @click="deleteItem(todo.id)"
                >
                  DELETE
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- edit old item modal -->
    <EditOldItemModal
      :editTemp="editTemp"
      ref="EditOldItemModal"
      @saveEditItem="saveEditItem"
    />
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import EditOldItemModal from "../components/EditOldItemModal.vue";
export default {
  name: "Todos",
  components: {
    EditOldItemModal,
  },
  data() {
    return {
      todos: [
        {
          id: "f91d9fbb-8ac5-4460-ae3f-4ff320a055ce",
          content: "這是第一個todo",
          isCompelete: false,
        },
      ],
      temp: "",
      editTemp: {},
    };
  },
  methods: {
    addNewItem() {
      if (!this.temp.trim()) return;
      this.todos.push({
        id: uuidv4(),
        content: this.temp.trim(),
        isCompelete: false,
      });
      this.temp = "";
    },
    editItem(id) {
      const itemIndex = this.todos.findIndex((item) => {
        return item.id === id;
      });
      this.editTemp = JSON.parse(JSON.stringify(this.todos[itemIndex]));
      this.$refs.EditOldItemModal.showModal();
    },
    saveEditItem(returnEdit) {
      const itemIndex = this.todos.findIndex((item) => {
        return item.id === returnEdit.id;
      });
      this.todos.splice(itemIndex, 1, returnEdit);
    },
    deleteItem(id) {
      const itemIndex = this.todos.findIndex((item) => {
        return item.id === id;
      });
      this.todos.splice(itemIndex, 1);
    },
  },
};
</script>

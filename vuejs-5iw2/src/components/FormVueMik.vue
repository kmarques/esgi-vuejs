<template>
  <div>
    <Vuemik
      :initialValue="initialValues"
      :onSubmit="addItem"
      :validate="validateForm"
      :validationSchema="validationSchema"
    >
      <template v-slot:default="{ handleSubmit }">
        <Field type="text" name="itemName" />
        <Field type="checkbox" name="completed" />

        <Field
          component="ImprovedSelect"
          name="category2"
          :options="categories"
        />

        <Field name="category" component="select">
          <option v-for="item in categories" :key="item">
            {{ item }}
          </option>
        </Field>

        <Field component="select" name="article">
          <option v-for="item in articles" :key="item">
            {{ item }}
          </option>
        </Field>

        <button @click="handleSubmit">Add item</button>
        <button @click="empty">Empty</button>
      </template>
    </Vuemik>
  </div>
</template>

<script>
const options = {
  cuisine: ["cuillères", "fouchettes", "couteaux"],
  salon: ["canapé", "TV"],
};
import * as Yup from "yup";

export default {
  name: "Form",
  data: () => ({
    initialValues: {
      itemName: "test",
      completed: false,
      category: Object.keys(options)[0],
      article: "",
    },
  }),
  methods: {
    addItem: function (values) {
      this.$emit("add-todo", values);
    },
    //Bonus
    validateForm: function (values) {
      const errors = {};
      if (values.email === "") {
        errors.email = "Is empty";
      }

      return errors;
    },
  },
  computed: {
    categories: function () {
      return Object.keys(options);
    },
    articles: function () {
      return options[this.$data.category];
    },
    //Bonus
    validationSchema: () => {
      return Yup.object().shape({
        firstName: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        lastName: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
      });
    },
  },
};
</script>
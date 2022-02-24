import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Basic = () => (
  <div>
    <h1>Meet Up Ideas</h1>
    <Formik
      initialValues={{
        toggle: false,
        checked: []
      }}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <field>
            We have been talking about a get together, so I put together a few
            ideas. Once everyone submits what they would enjoy doing, I will
            plan the most popular idea. Will you be able to make the March, 10?
          </field>
          <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>

          {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
          <div id="checkbox-group">Choose as many as you want</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="Escape Room" value="Escape room" />
              Escape Room
            </label>
            <label>
              <Field type="checkbox" name="Movie" value="Movie" />
              Movie
            </label>
            <label>
              <Field type="checkbox" name="Hike" value="Hike" />
              Hike
            </label>
            <label>
              <Field
                type="checkbox"
                name="Drinks on a Patio"
                value="Drinks on a Patio"
              />
              Drinks on a Patio
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));

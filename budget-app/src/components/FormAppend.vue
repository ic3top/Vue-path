<template>
  <el-card class="form-card">
    <el-form :model="formData" status-icon ref="addItemForm" :rules="rules" label-position="top"
             @keyup.enter="onSubmit">
      <el-form-item label="Type" prop="type">
        <el-select class="type-select" v-model="formData.type" placeholder="Choose option...">
          <el-option label="Income" value="INCOME"></el-option>
          <el-option label="Outcome" value="OUTCOME"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Comment" prop="comment">
        <el-input type="textarea" class="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="formData.comment"
                  placeholder="Input comment..."></el-input>
      </el-form-item>
      <el-form-item label="Value" prop="value">
        <el-input v-model.number="formData.value" placeholder="Input value..." suffix-icon="el-icon-coin"></el-input>
      </el-form-item>
      <el-button @click="onSubmit" type="primary" class="submit-button">Submit <i
          class="el-icon-circle-plus-outline el-icon-right"></i>
      </el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "FormAppend",
  data() {
    const validateValue = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input valid value'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input number'));
          return;
        }
        callback();
      }, 800);
    };
    return {
      formData: {
        type: 'INCOME',
        comment: '',
        value: '',
        shown: true
      },
      rules: {
        type: [
          {required: true, message: 'Please select type', trigger: 'blur'}
        ],
        comment: [
          {required: true, message: 'Please input comment', trigger: 'change'}
        ],
        value: [
          {required: true, validator: validateValue, trigger: 'change'}
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          this.formData.value = this.formData.type === 'OUTCOME' ?
              -Math.abs(this.formData.value) :
              Math.abs(this.formData.value);
          this.$emit('submitForm', {...this.formData});
          this.$refs.addItemForm.resetFields();
        }
      });
    }
  }
};
</script>

<style scoped>
.form-card {
  border: 1px solid lightgrey;
  border-radius: 5px;
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}

.submit-button {
  display: block;
  margin-left: auto;
}
</style>
<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>
            {{ task.text }}
            <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
        </h3>
        <p class="method">{{ date(task.day) }}</p>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'Task',
    props: {
        task: Object, 
    },
    methods: {
      date: function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm a');
      }
    }
}
</script>

<style>

.fas {
    color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>